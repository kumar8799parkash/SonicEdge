import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name : {type : String , required : true},
    price : {type : Number , required : true},
    image : {type : String , required : true},
    category : {type : String , required : true}   //  ex : "SaleIsLive" , "BigDeals" , "NewArrivals" etc.
})

const Product = mongoose.models.Product || mongoose.model("Product" , productSchema);          // here we are creating a model named "Product" if it already do not exist



export default Product;