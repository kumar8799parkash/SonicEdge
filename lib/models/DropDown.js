import mongoose from "mongoose";

const dropDownSchema = new mongoose.Schema({
    name : {type : String , required : true},                    // "name" and name are equivalent here
    image : {type : String , required  :true},                   // "image" and image are equivalent here
})

const DropDown = mongoose.models.DropDown || mongoose.model("DropDown" , dropDownSchema);

export default DropDown