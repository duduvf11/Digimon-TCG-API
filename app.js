import "dotenv/config"
import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const PORT = process.env.PORT || 3020

//rotas
import userRouter from "./src/routes/userRouter.js"
import searchRouter from "./src/routes/searchRouter.js"
import insetionRouter from "./src/routes/insertionRouter.js"

const app = express()

const corsOptions = {
    origin: 'http://localhost:5174', // Substitua pelo domínio do seu frontend
    credentials: true // Isso é necessário para permitir o envio de cookies
};

app.use(cors(corsOptions));

app.use(cookieParser())

//habilitando formato json
app.use(express.json())

//cadastrando rotas
app.use('/user', userRouter)
app.use('/search', searchRouter)
app.use('/insertion', insetionRouter)

app.listen(PORT, () => {
    console.log('FUNCIONANDO')  
})