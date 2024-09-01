import redis from "redis"

//Redis
const client = redis.createClient()
client.on('error', err => console.log("Error Redis Client") )

export {client}