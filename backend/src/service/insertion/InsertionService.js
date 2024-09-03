import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

class InsertionService{

    async execute(name, type, description, userName){

        try{

            await prisma.$connect()

            if (!name || !type || !description || !userName){
                return null
            }

            const newDigimon = await prisma.post.create({
                data: {
                    name: name,
                    type: type,
                    description: description,
                    userName: userName
                }
            })

            return newDigimon

        } catch (error) {

            console.error(error);
            res.status(500).json({ message: "Erro no servidor" });
    
        } finally {
            
            await prisma.$disconnect();
            
        }

        

    }

}

export {InsertionService}