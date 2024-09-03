import { Router } from "express";

// Importa serviços
import { CreateUserService } from "../service/user/CreateUserService.js";
import { LoginUserService } from "../service/user/LoginUserService.js";

import { clientRedis } from "../redis/client-redis.js";
import logger from '../config/logger.js'; // Importa o logger do Winston

const router = Router();

// Criar novo usuário
router.post('/new', async (req, res) => {
    try {
        res.clearCookie('authToken');

        const { user, password } = req.body;
        const createUserService = new CreateUserService();

        const createUser = await createUserService.execute({ user, password });

        if (createUser) {
            await clientRedis.del("postagem-search");
            logger.info(`User created: ${user}`);
            res.json({ message: "Usuário cadastrado." });
        } else {
            logger.warn(`User already exists: ${user}`);
            res.status(400).json({ message: "Esse usuário já existe." });
        }
    } catch (err) {
        logger.error('Error creating user:', err);
        res.status(500).json({ message: "Erro interno do servidor." });
    }
});

// Logar usuário
router.post('/login', async (req, res) => {
    try {
        const { user, password } = req.body;
        const loginUserService = new LoginUserService();

        const loginUser = await loginUserService.execute({ user, password });

        if (!loginUser) {
            logger.warn(`Login failed for user: ${user}`);
            return res.status(400).json({ message: "Usuário e/ou senha errados." });
        }

        await clientRedis.del("postagem-search");

        const token = loginUser.token;
        logger.info(`User logged in: ${user}, Token: ${token}`);

        // Verifica e remove o cookie antigo, se existir
        res.clearCookie('authToken');
        
        res.cookie('authToken', token, {
            maxAge: 1000 * 60 * 10, 
            httpOnly: true,
            path: '/'
        });

        res.json({ message: "Logado" });
    } catch (err) {
        logger.error('Error logging in user:', err);
        res.status(500).json({ message: "Erro interno do servidor." });
    }
});

export default router;
