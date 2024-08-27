import "dotenv/config"

import jsonwebtoken from "jsonwebtoken"
const { verify } = jsonwebtoken

export default function(req, res, next){

    const authHeader = req.headers.authorization

    if (!authHeader) return res.status(401).json({message: "Token invalida"})

    const [, token] = split(' ')

    try{

        verify(token, process.env.JWT_SECRET)


    } catch(err){

        return res.status(401).end()
    }

    next()

}