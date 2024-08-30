import "dotenv/config"
import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import https from "https"
import fs from "fs"
import path from "path"

const PORT = process.env.PORT || 3020

const options = {
    key: fs.readFileSync(path.join(__dirname, "server.key")),
    cert: fs.readFileSync(path.join(__dirname, "server.cert"))
}

console.log(options)

//rotas
import userRouter from "./src/routes/userRouter.js"
import searchRouter from "./src/routes/searchRouter.js"
import insetionRouter from "./src/routes/insertionRouter.js"

const app = express()

const corsOptions = {
    origin: 'http://localhost:5174',
    credentials: true
};

app.use(cors(corsOptions));

app.use(cookieParser())

//habilitando formato json
app.use(express.json())

//cadastrando rotas
app.use('/user', userRouter)
app.use('/search', searchRouter)
app.use('/insertion', insetionRouter)

const server = https.createServer(options, (req, res) => {
    res.end('Hello, secure world!');
  });

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
/*app.listen(PORT, () => {
    console.log('FUNCIONANDO')  
}) */