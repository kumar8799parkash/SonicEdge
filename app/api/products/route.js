import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product from "@/lib/models/Product";

export async function GET(request){
    await connectDB();
    const {searchParams} = new URL(request.url);
    const category = searchParams.get("category");

    try{
        let products;

        if(category){
            products = await Product.find({category});
        }else{
            products = await Product.find({});
        }
        return NextResponse.json(products);
    }catch(err){
        return NextResponse.json({error : err.message} , {status : 500});
    }

}