import prismaClient from "../../prisma/client.js";

class InsertionService{

    async execute(){

        const newDigimon = await prismaClient.post.create({
            data: {
                
            }
        })

    }

}

export {InsertionService}