import Models from './models'
// import jsonDB from '../../db'

class Users extends Models{

    constructor(key) {
        super(key)
    }

    findAll2(){
        return this.collection()
    }

    create(id, email, password){
        const collection = this.collection()
        return  new Promise( (resolve, reject) => {
            const user = {
                id : id,
                email : email,
                isAdmin : false,
                password : password
            }
            this.setCollection([...this.collection(), user])
            return resolve(user)
        }) 
    }
}

export default new Users('users')