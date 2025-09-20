import connectDB from "@/lib/mongodb";
import Category from "@/lib/models/category";

export async function GET(request){
    await connectDB();
    const {myParams} = new URL(request.url);
    const category = myParams.get("category");

    try{
        let categories;

        if(category){
            categories = await Category.find({codeName : category});
        }
        else{
            
        }
    }
}