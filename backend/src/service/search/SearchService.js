import prismaClient from "../../prisma/client.js";

class SearchService{

    async execute(){

        const getAll = await prismaClient.post.findMany({
            select: {
                name: true,
                type: true,
                description: true
            }
        })

        if (!getAll){

            return null

        } else{

            return getAll
            
        }

    }

}

export {SearchService}