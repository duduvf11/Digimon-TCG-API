import { Router } from "express";
import { clientRedis } from "../redis/client-redis.js";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

import isAuthenticated from "../middleware/isAuthenticated.js";

import { InsertionService } from "../service/insertion/InsertionService.js";

const router = Router()

router.post('/', isAuthenticated, async (req, res) => {

    try{

        await prisma.$connect();

        const {name, type, description} = req.body
        const userName = req.user

        const insertionService = new InsertionService()

        const newDigimon = await insertionService.execute(name, type, description, userName)

        if (!newDigimon) res.status(401).json({message: "Erro"})

        await clientRedis.del("postagem-search");

        res.json({message: "Digimon criado.", newDigimon})

        await prisma.$disconnect();

    }   catch (error) {

        console.error(error);
        res.status(500).json({ message: "Erro no servidor" });

    } finally {
        
        await prisma.$disconnect();
        
    }
    
})

export default router