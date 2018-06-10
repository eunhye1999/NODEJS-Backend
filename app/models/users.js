import Models from './models'
import jsonDB from '../../db'

class Users extends Models{

    constructor(key) {
        super(key)
    }

    findAll2(){
        return jsonDB[this.key]
    }

}

export default new Users('users')