import Users from '../models/users' 

const UsersController = {

    getAll(req, res){
        res.status(200).json({
            users: Users.findAll2()
        })
    },
    get(req, res){
        res.json({
            users: Users.find(req.params.id)  
        })
    },
    create(req, res){
        const { id, email, password } = req.body
        Users.create(id, email, password).then(
            user => res.status(201).json({ user , status})
        )
       
    }

}

export default  UsersController