
// app/api/hello/route.js

import connectDB from "@/middleware/mongoose/page";
import order from "@/models/Order/page";

export const POST = connectDB(async (req) => {
    try {
        // Parse the JSON body
        const body = await req.json();

        const { id } = body;
        const getProduct = await order.findById(id);

        return new Response(
            JSON.stringify({ success: getProduct }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );



        
    } catch (error) {
        console.error("Error in POST handler:", error);
        return new Response(
            JSON.stringify({ error: "Server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
});









// export const POST =async(req,res)=>{

//     return new Response(JSON.stringify([272207,56455,555554]),
//     {status:200, headers:{"content-type":"application/json"}}
  
//   )
//   }


