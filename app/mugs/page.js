import React from 'react'
import Link from 'next/link'

// // ---backend----
import mongoose from "mongoose";
import Product from "@/models/Products/page";
// import connectDB from "@/middleware/mongoose/page";

const page = async() => {

  if(!mongoose.connections[0].readyState){
          await mongoose.connect(process.env.MONGO_URL)
      }

        const product = await Product.find({category:"tshirt"})


        const tshirt = {}


        for(let item of product){
      
          if(item.title in tshirt ){
      
              if (!tshirt[item.title].color.includes(item.color) && item.availableQty > 0){
              tshirt[item.title].color.push(item.color)
            }
            
            if (!tshirt[item.title].size.includes(item.size) && item.availableQty > 0){
              tshirt[item.title].size.push(item.size)
            }
          }
          
          else{
            tshirt[item.title] = JSON.parse(JSON.stringify(item))
            if(item.availableQty>0){
              tshirt[item.title].color = [item.color]
              tshirt[item.title].size = [item.size]
            }
          }
      
        }

        // const tshirts = Object.values(tshirt)




      


  return (
    <div>
       

       <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center  ">




  {Object.values(tshirt).map((item)=>{return <Link key={item._id} href={`/product/${item.slug}`}legacyBehavior >


     <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer shadow-xl m-5  ">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className=" h-[35vh] md:h-[50vh] m-auto" src={item.image}/>
          
        </a>

        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
          <p className="mt-1 mx-2">₹ {item.price}-/</p>
         <p className='mt-1 '>{item.size.map((size,index)=>{
          // <span key={index} className='mx-2 text-red-950'>{size}</span>
          return<span key={index} className="mx-2 p-1 border border-100">{size}</span>

 
         })}</p>

         <p className='mt-2'>{item.color.map((color,index)=>{
          return <button style={{backgroundColor:color}} key={index} className={`border-2  ml-1  rounded-full w-6 h-6 focus:outline-none`}></button>

         })}</p>



            
          {/* <p className={`mt-1`}>{item.color}</p> */}
        </div>
      </div>
      </Link>})} 
    


    
    </div>
  </div>
</section>
      
    </div>
  )
}

export default page


// export async function getServerSideProps({ req, res }) {
  
//    if(!mongoose.connections[0].readyState){
//      await mongoose.connect(process.env.MONGO_URL)
//       }

//         const product = await Product.find()


//   return {
//     props: {product:JSON.parse(JSON.stringify(product))},
//   }
// }