import mongoose from 'mongoose'
import { unique } from 'next/dist/build/utils'

const categorySchema = new mongoose.Schema({
    name : {type : String , required : true , unique : true},
    slug : {type : String , required : true , unique : true},
    description : String,
    image : String,
} , {timestamps : true});

const Category = mongoose.model("Category" , categorySchema);

export default Category;