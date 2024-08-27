import { Router } from "express";

import isAuthenticated from "../middleware/isAuthenticated.js";

import { InsertionService } from "../service/insertion/InsertionService.js";

const router = Router()

router.get('/', isAuthenticated, async (req, res) => {

    const insertionService = new InsertionService()

    const findAll = await insertionService.execute()

    res.json(findAll)
})

export default router