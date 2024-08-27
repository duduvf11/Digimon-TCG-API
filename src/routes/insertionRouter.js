import { Router } from "express";

import isAuthenticated from "../middleware/isAuthenticated.js";

const router = Router()

router.post('/', isAuthenticated, async (req, res) => {
    //id, name, type, description, image
})

export default router