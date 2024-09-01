import "dotenv/config"
import prismaClient from "../../prisma/client.js";

import jsonwebtoken from "jsonwebtoken"
const { sign } = jsonwebtoken

import bcryptjs from "bcryptjs"
const { compare } = bcryptjs

class LoginUserService{

    async execute({user, password}){

        const userExist = await prismaClient.user.findFirst({
            where: {
                user: user
            }
        })

        if (!userExist) return null

        const decryptedPassword = await compare(password, userExist.password)

        if (!decryptedPassword) return null

        const token = sign({
            user: userExist.user
        },
            process.env.JWT_SECRET, {
            expiresIn: "3m"
        })
        console.log("criando token:", token)
        return {
            token: token
        }

    }

}

export {LoginUserService}
