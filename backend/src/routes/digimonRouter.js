import { Router } from "express";
const digimonRouter = Router();

import searchRouter from "./searchRouter.js";
import insertionRouter from "./insertionRouter.js";

// Rota para busca de Digimons
digimonRouter.get('/', searchRouter);

// Rota para inserção de um novo Digimon
digimonRouter.post('/', insertionRouter);

export default digimonRouter;