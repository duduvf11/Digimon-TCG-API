import cache from "express-redis-cache"

cache = cache({
    prefix: 'redis-test',
    host: 'redis',
    port: 6379
})

export {cache}