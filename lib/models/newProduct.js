import mongoose from 'mongoose'

const newProductSchema = new mongoose.Schema({
    name : {type : String , required : true},
    description : String,
    price : {type : Number , required : true},
    images : [{type : String}],
    category : [{type : mongoose.Schema.Types.ObjectId , ref : "Category" , required : true}],
    tags : [{type : String}],

},{timestamps : true});         // What it does: Mongoose automatically adds two fields to your schema: createdAt  and updatedAt

//In MongoDB, the stored document will look like:
/*
{
  "_id": "6502d4e4f7c0d1a23a4b1234",
  "name": "Sony WH-1000XM5",
  "price": 299,
  "stock": 20,
  "category": "6502d4c2f7c0d1a23a4b5678",
  "createdAt": "2025-09-17T06:20:15.123Z",   // auto-added
  "updatedAt": "2025-09-17T06:20:15.123Z",   // auto-added              // auto updated when we updates the document
  "__v": 0
}
*/

const NewProduct = mongoose.model("NewProduct" , newProductSchema);
export default NewProduct


/*



// models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },        // e.g. "Sony WH-1000XM5"
  description: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  images: [{ type: String }],                    // multiple product images
  brand: { type: String },                       // optional brand info
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  tags: [{ type: String }],                      // e.g. ["wireless", "noise-canceling"]
  rating: { type: Number, default: 0 },          // avg rating
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      comment: String,
      rating: Number,
      createdAt: { type: Date, default: Date.now }
    }
  ],
  isOnSale: { type: Boolean, default: false },   // for "Today’s Sale"
  salePrice: { type: Number },
}, { timestamps: true });

export default mongoose.model("Product", productSchema);





*/