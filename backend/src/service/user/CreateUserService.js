import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

import bcryptjs from "bcryptjs"
const { hash } = bcryptjs;

class CreateUserService{
    async execute({user, password}){

        try{

            await prisma.$connect();

            const userExist = await prisma.user.findFirst({
                where: {
                    user: user
                }
            })

            if (userExist) return null

            const passwordHash = await hash(password, 8)

            const createUser = await prisma.user.create({
                data: {
                    user: user,
                    password: passwordHash
                }
            })

            return createUser

        } catch (error) {

            console.error(error);
            res.status(500).json({ message: "Erro no servidor" });
    
        } finally {
            
            await prisma.$disconnect();
            
        }

    }
}

export {CreateUserService}