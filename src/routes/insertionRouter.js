import { Router } from "express";

import isAuthenticated from "../middleware/isAuthenticated.js";

import { InsertionService } from "../service/insertion/InsertionService.js";

const router = Router()

router.post('/', isAuthenticated, async (req, res) => {

    const {name, type, description} = req.body

    const userName = req.user

    const insertionService = new InsertionService()

    const newDigimon = await insertionService.execute(name, type, description, userName)

    if (!newDigimon) res.status(401).json({message: "Erro"})

    res.json({message: "Digimon criado.", newDigimon})
})

export default router