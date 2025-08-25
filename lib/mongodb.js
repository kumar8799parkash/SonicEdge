import mongoose from 'mongoose'

const connectDB = async ()=>{
    try{
        if (mongoose.connections[0].readyState) return;
        await mongoose.connect(process.env.MONGO_URI)
    }catch(err){
        console.log("Error while connecting to the database!");
    }
}