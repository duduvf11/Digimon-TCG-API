import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import https from "https";
import fs from "fs";
import { join } from 'path';

// Configurações de caminho
const __dirname = process.cwd(); // process.cwd() retorna o diretório atual de trabalho

const PORT = process.env.PORT || 3020;

// Opções HTTPS (incluindo chave e certificado)
const options = {
    key: fs.readFileSync(join(__dirname, 'server.key')),   // Caminho do arquivo server.key
    cert: fs.readFileSync(join(__dirname, 'server.cert')), // Caminho do arquivo server.cert
}; 

// Rotas
import userRouter from "./src/routes/userRouter.js";
import searchRouter from "./src/routes/searchRouter.js";
import insetionRouter from "./src/routes/insertionRouter.js";

const app = express();

app.use(cors({
    origin: 'http://localhost:5174',
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.use('/user', userRouter);
app.use('/search', searchRouter);
app.use('/insertion', insetionRouter);

const server = https.createServer(options, app);

server.listen(PORT, () => {
    console.log(`Servidor HTTPS rodando na porta ${PORT}`);
});