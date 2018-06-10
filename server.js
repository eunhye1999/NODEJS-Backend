import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser'
// import routesFile from './app/routes/users'

function setRouters(app){
    const APP_DIR = `${__dirname}/app/routes`
    const arrayDir = fs.readdirSync(APP_DIR).filter(
        file => fs.statSync(`${APP_DIR}/${file}`)
    )

    arrayDir.forEach((dir) => {
        dir = dir.slice(0,-3)
        const router = express.Router()
        const routesFile = require(`${APP_DIR}/${dir}`)

        routesFile.setupRouters(router)
        app.use(`/${dir}`, router)
    }) 
}

export function setup(){
    
    const app = express()
    const PORT = 3050;

    app.use(bodyParser.urlencoded({ extended : true }))
    app.use(bodyParser.json())

    setRouters(app)

    app.listen(PORT, () => {
        console.log("App listening PORT : "+PORT)
    })

}