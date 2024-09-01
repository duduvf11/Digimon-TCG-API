import { Router } from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";

import { SearchService } from "../service/search/SearchService.js";
import { client } from "../redis/client-redis.js";

//import { cache } from "../redis/cache.js";

const router = Router()

router.get('/', isAuthenticated, async (req, res) => {

    try{

        const postagem = await client.get('postagem-search')

        //Para por aqui caso haja cache
        if (postagem) res.status(200).json(JSON.parse(postagem));

        /////////////////////////////

        const searchService = new SearchService()
    
        const find = await searchService.execute()

        if (!find){
            return res.status(400).json({message: "Nenhum Digimon encontrado..."})
        } 

        await client.set("postagem-search", JSON.stringify(find))

        res.json(find)

    } catch(err){

        console.error('Error processing request:', err)
        res.status(500).json({message: "Problema interno"})
    }
    
})

export default router