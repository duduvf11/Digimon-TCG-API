import redis from "redis"

//Redis
const clientRedis = redis.createClient()
clientRedis.on('error', err => console.log("Error Redis Client") )

await clientRedis.connect()

export {clientRedis}