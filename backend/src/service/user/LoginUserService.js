import "dotenv/config"

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

import jsonwebtoken from "jsonwebtoken"
const { sign } = jsonwebtoken

import bcryptjs from "bcryptjs"
const { compare } = bcryptjs

class LoginUserService{

    async execute({user, password}){

        try{

            await prisma.$connect();

            const userExist = await prisma.user.findFirst({
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

        } catch (error) {

            console.error(error);
            res.status(500).json({ message: "Erro no servidor" });
    
        } finally {
            
            await prisma.$disconnect();
            
        }

        
    }

}

export {LoginUserService}
