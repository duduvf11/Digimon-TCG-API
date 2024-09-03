import { Router } from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { SearchService } from "../service/search/SearchService.js";
import { clientRedis } from "../redis/client-redis.js";
import logger from '../config/logger.js'; // Importa o logger do Winston

const router = Router();

router.get('/', isAuthenticated, async (req, res) => {
    try {
        const postagem = await clientRedis.get('postagem-search');

        // Loga a resposta cacheada
        logger.info('Cache hit: ', { postagem: JSON.parse(postagem) });
        if (postagem) return res.status(200).json(JSON.parse(postagem));

        const searchService = new SearchService();
        const find = await searchService.execute();

        if (!find) {
            return res.status(400).json({ message: "Nenhum Digimon encontrado..." });
        }

        await clientRedis.set("postagem-search", JSON.stringify(find));

        return res.json(find);
    } catch (err) {
        logger.error('Error processing request:', err);
        return res.status(500).json({ message: "Problema interno" });
    }
});

export default router;
