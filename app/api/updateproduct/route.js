import Product from "@/models/Products/page"; // Import the Product model
import connectDB from "@/middleware/mongoose/page"; // Import MongoDB connection middleware



export const POST = connectDB(async(req,res)=>{

    try{

    

    const body = await req.json();

    const updateproduct = await Product.findByIdAndUpdate(body._id,body)

    return new Response(JSON.stringify({"success":"product has been added "}))
    }

    catch(error){
        return new Response(JSON.stringify({"error":error.message}),
        {status:400,headers:{"content":"application/json"}}
    )
    }

})






















