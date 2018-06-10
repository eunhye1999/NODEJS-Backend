import jsonDB from '../../db'

export default class Models {

    constructor(key) {
        this.key = key;
    }

    findAll(){
        return jsonDB[this.key]
    }

    find(id){
        console.log(id)
        return jsonDB[this.key].find(user => user.id === +id)
    } 

    update(id, attr){

    }
    destroy(id){

    }

    setCollection(collection){
        jsonDB[this.key] = collection
        // console.log(this.database())
    }

    collection(){
        return jsonDB[this.key]
    }

    database(){
        return jsonDB
    }
}
