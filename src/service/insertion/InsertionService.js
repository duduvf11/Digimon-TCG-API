import prismaClient from "../../prisma/client.js";

class InsertionService{

    async execute(){

        const getAll = await prismaClient.post.findAll()

        if (!getAll){

            return null

        } else{

            return getAll
            
        }

    }

}

export {InsertionService}