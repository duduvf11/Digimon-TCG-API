import { Router } from "express";

import isAuthenticated from "../middleware/isAuthenticated.js";

const router = Router()

router.get('/', isAuthenticated, async (req, res) => {

})

export default router