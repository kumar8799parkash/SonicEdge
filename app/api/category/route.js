import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Category from "@/lib/models/category";

export async function GET(request){
    await connectDB();
    /* const {searchParams} = new URL(request.url);
    const category = searchParams.get("category"); */

    try{
        let categories;

        categories = await Category.find({});

        /* if(category){
            categories = await Category.find({codeName : category});
        } */
        /* else{
            categories = await Category.find({});
        } */
        console.log("Fetched products inside category/route.js : " , categories);
        return NextResponse.json(categories);
    }catch(err){
        return NextResponse.json({error : err.message} , {status : 500});
    }
}