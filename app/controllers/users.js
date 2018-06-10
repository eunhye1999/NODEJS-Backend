import Users from '../models/users' 

const UsersController = {

    getAll(req, res){
        res.json({
            users: Users.findAll2()  
        })
    },
    get(req, res){
        
    },
    create(req, res){

    }

}

export default  UsersController