import mongoose from "mongoose";

let isConnected = false

export const connectToDB = async()=>{
    mongoose.set('strictQuery',true)
    if(isConnected){
        console.log('mongoose is connected')
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:'destForm',
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        isConnected=true
        console.log('Mongodb connected')
    } catch (error) {
        console.log(error)
    }
}