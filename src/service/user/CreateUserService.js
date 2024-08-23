import prismaClient from "../../prisma/client.js";

import bcryptjs from "bcryptjs"
const { hash } = bcryptjs;

class CreateUserService{
    async execute({user, password}){

        const userExist = await prismaClient.user.findFirst({
            where: {
                user: user
            }
        })

        if (userExist) return null

        const passwordHash = await hash(password, 8)

        const createUser = await prismaClient.user.create({
            data: {
                user: user,
                password: passwordHash
            }
        })

        return createUser

    }
}

export {CreateUserService}