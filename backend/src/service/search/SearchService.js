import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

class SearchService{

    async execute(){

        try{

            await prisma.$connect()

            const getAll = await prisma.post.findMany({
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

        } catch (error) {

            console.error(error);
            res.status(500).json({ message: "Erro no servidor" });
    
        } finally {
            
            await prisma.$disconnect();
            
        }
        
    }

}

export {SearchService}