import controller from '../controllers/article'

export function setupRouters(router){
    
    // fist 
    // router.get('/', (req, res) => {res.send("first route")})

    router.get('/', controller.getAll)
    router.get('/:id', controller.get)
    router.post('/', controller.create)

}