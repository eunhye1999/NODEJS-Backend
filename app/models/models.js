import jsonDB from '../../db'

export default class Models {

    constructor(key) {
        this.key = key;
    }

    findAll(){
        return jsonDB[this.key]
    }
    
}
