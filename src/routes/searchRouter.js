import { Router } from "express";

import isAuthenticated from "../middleware/isAuthenticated.js";

import { SearchService } from "../service/search/SearchService.js";

const router = Router()

router.get('/', isAuthenticated, async (req, res) => {

    const searchService = new SearchService()

    const find = await searchService.execute()

    if (!find) return res.status(400).json({message: "Nenhum Digimon encontrado..."})

    res.json(find)
})

export default router