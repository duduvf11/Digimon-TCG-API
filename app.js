import "dotenv/config"
import express from "express"

const PORT = process.env.PORT || 3020

//rotas
import userRouter from "./src/routes/userRouter.js"
import searchRouter from "./src/routes/searchRouter.js"
import insetionRouter from "./src/routes/insertionRouter.js"

const app = express()

//habilitando formato json
app.use(express.json())

//cadastrando rotas
app.use('/user', userRouter)
app.use('/search', searchRouter)
app.use('/insertion', insetionRouter)

app.listen(PORT, () => {
    console.log('FUNCIONANDO')
})