import { Router } from "express";

//import service
import { CreateUserService } from "../service/user/CreateUserService.js";
import { LoginUserService } from "../service/user/LoginUserService.js";

import { clientRedis } from "../redis/client-redis.js";

const router = Router()

//Criar novo usuario
router.post('/new', async (req, res) => {

    res.clearCookie('authToken');

    const {user, password} = req.body

    const createUserService = new CreateUserService()

    const createUser = await createUserService.execute({user, password})

    //return 
    if (createUser){
        await clientRedis.del("postagem-search");
        res.json({message: "Usuário cadastrado."})
    }
    else{
        res.status(400).json({message: "Esse usuário já existe."})
    } 

})

//Logar usuario
router.post('/login', async (req, res) => {

    const {user, password} = req.body

    const loginUserService = new LoginUserService()

    const loginUser = await loginUserService.execute({user, password})

    //checagem
    if (!loginUser) return res.status(400).json({message: "Usuário e/ou senha errados."})

    await clientRedis.del("postagem-search");

    const token = loginUser.token
    console.log("token do login", token)

    // Verificar e remover o cookie antigo, se existir
    res.clearCookie('authToken');
    
    res.cookie('authToken', token, {
        maxAge: 1000 * 60 * 10, 
        httpOnly: true,
        path: '/'
    })

    res.json({message: "Logado"})

})

export default router