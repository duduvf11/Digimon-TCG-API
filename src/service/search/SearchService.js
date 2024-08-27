import prismaClient from "../../prisma/client.js";

class SearchService{

    async execute(){

        const getAll = await prismaClient.post.findAll()

        if (!getAll){

            return null

        } else{

            return getAll
            
        }

    }

}

export {SearchService}