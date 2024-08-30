import "dotenv/config"

import jsonwebtoken from "jsonwebtoken"
const { verify } = jsonwebtoken

export default function(req, res, next){

    //Ver com o Watanabe qual usar
    console.log(req.cookies); // Mostra todos os cookies recebidos
    const authToken = req.cookies.authToken; // Acessa o token específico
    console.log('Auth Token:', authToken);

    if (!authToken) return res.status(401).json({message: "Token invalido"})

    try{

        const user = verify(authToken, process.env.JWT_SECRET)

        req.user = user.user

        next()

    } catch (err){

        return res.status(401).json({message: "Token invalido"})

    }

}

/*

    const bearerToken = req.headers['authorization']

    if (!authHeader) return 

    const [, token] = split(' ')

    try{

        verify(token, process.env.JWT_SECRET)


    } catch(err){

        return res.status(401).end()
    }

    next()

*/