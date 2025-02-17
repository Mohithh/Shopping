import Product from "@/models/Products/page"; // Import the Product model
import connectDB from "@/middleware/mongoose/page"; // Import MongoDB connection middleware

export const POST = connectDB(async(req,res)=>{



  try{
  const body = await req.json();

  const addproduct = new Product({
      title: body.title,
      slug: body.slug,
      description:body.description,
      image: body.image,
      category: body.category,
      size: body.size,
      color: body.color,
      price: body.price,
      availableQty: body.availableQty,
  })

  await addproduct.save()

  return new Response(JSON.stringify({"success":"your product has been added"}),
  {status:200, headers:{"content-type":"application/json"}}
  
)}
catch(error){
  return new Response(JSON.stringify({"error":error.message}),
  {status:400, headers:{"content-type":"application/json"}}

)

}

 


})