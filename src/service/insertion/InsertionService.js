import prismaClient from "../../prisma/client.js";

class InsertionService{

    async execute(name, type, description, userName){

        const newDigimon = await prismaClient.post.create({
            data: {
                name: name,
                type: type,
                description: description,
                userName: userName
            }
        })

        return newDigimon

    }

}

export {InsertionService}