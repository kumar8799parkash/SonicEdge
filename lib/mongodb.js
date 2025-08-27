import mongoose from 'mongoose'

const connectDB = async ()=>{
    if (mongoose.connections[0].readyState) return;
    try{
        await mongoose.connect(process.env.MONGO_URI)
    }catch(err){
        console.log("Error while connecting to the database!");
    }
}

export default connectDB;