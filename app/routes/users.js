import controller from '../controllers/users'

export function setupRouters(router){
    
    router.get('/', controller.getAll)
    router.get('/:id', controller.get)
    router.post('/', controller.create)

}