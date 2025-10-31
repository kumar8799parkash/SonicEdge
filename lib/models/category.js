import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    name : {type : String , required : true},
    slug : {type : String , required : true},
    description : String,
    image : String,
    codeName : String
} , {timestamps : true});

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;