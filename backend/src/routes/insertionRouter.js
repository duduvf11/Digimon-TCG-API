import { Router } from "express";
import { body, validationResult } from 'express-validator';
//import { clientRedis } from "../redis/client-redis.js";
import { PrismaClient } from "@prisma/client";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { InsertionService } from "../service/insertion/InsertionService.js";
import logger from '../../logger.js'; // Importa o logger do Winston

const prisma = new PrismaClient();
const router = Router();

const insertionValidations = [
    body('name').isString().notEmpty().withMessage('Nome é obrigatório.'),
    body('type').isString().notEmpty().withMessage('Tipo é obrigatório.'),
    body('description').optional().isString().withMessage('Descrição deve ser uma string.')
];

router.post('/', isAuthenticated, insertionValidations, async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        await prisma.$connect();

        const { name, type, description } = req.body;
        const userName = req.user;

        const insertionService = new InsertionService();
        const newDigimon = await insertionService.execute(name, type, description, userName);

        if (!newDigimon) {
            logger.warn('Insertion failed for:', { name, type, description });
            return res.status(401).json({ message: "Erro" });
        }

        //await clientRedis.del(`postagem-search-${req.user}`);

        logger.info('Digimon criado com sucesso:', { name, type, description, userName });
        res.json({ message: "Digimon criado.", newDigimon });
    } catch (error) {
        logger.error('Error during insertion:', error);
        res.status(500).json({ message: "Erro no servidor" });
    } finally {
        await prisma.$disconnect();
    }
});

export default router;
