import mongoose from 'mongoose'

const connectDB = async ()=>{
    if (mongoose.connection.readyState) return;
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected!");
    }catch(err){
        console.log("Error while connecting to the database!");
    }
}

export default connectDB;    