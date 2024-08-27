import { Router } from "express";

//import service
import { CreateUserService } from "../service/user/CreateUserService.js";
import { LoginUserService } from "../service/user/LoginUserService.js";

const router = Router()

//Criar novo usuario
router.post('/new', async (req, res) => {

    const {user, password} = req.body

    const createUserService = new CreateUserService()

    const createUser = await createUserService.execute({user, password})

    //return 
    createUser ? res.json({message: "Usuário cadastrado."}) : res.status(400).json({message: "Esse usuário já existe."})

})

//Logar usuario
router.post('/login', async (req, res) => {

    const {user, password} = req.body

    const loginUserService = new LoginUserService()

    const loginUser = await loginUserService.execute({user, password})

    //checagem
    if (!loginUser) res.status(400).json({message: "Usuário e/ou senha errados."})

    const token = loginUser.token

    res.cookie('authToken', token, {
        maxAge: 1000 * 60 * 5
    })

    res.json({message: "Logado"})

})

export default router