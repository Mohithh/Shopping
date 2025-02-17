
import Product from "@/models/Products/page";
import connectDB from "@/middleware/mongoose/page";



export const GET = connectDB(async(req,res)=>{

 


  const getproduct = await Product.find();

  

 

  return new Response(JSON.stringify({"success":getproduct}),

  {status:200, headers:{"content":"application/json"}}

)
  

})
























