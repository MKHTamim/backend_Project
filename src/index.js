

import dotenv from 'dotenv'

import express from 'express'
import { connectDB } from './db/index.js'
const app = express()

dotenv.config({
    path:"./env"
})

connectDB()


/* IFFe approach - not recomended
;(async ()=>{
    try {
        console.log("port : " , process.env.PORT)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        if(connectionInstance){

            console.log("MongoDB connected successful !!")
            // console.log("connectionInstance : ",connectionInstance)
        }
        
        app.on("error", (error)=>{
            console.error("ERROR :",error)
            throw error
        })

        app.listen(process.env.PORT , ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error in DB connection: " ,error)
        throw error
    }
})()

*/