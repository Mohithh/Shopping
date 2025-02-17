// app/api/hello/route.js


  export const GET =async(req,res)=>{

    const pincode = {
      "272207":["Uttar pradesh","Siddharth Nagar"],
      "110003":["Delhi" ,"delhi"],
      "721302":["Kharagpur","west bangal"]
    }

    return new Response(JSON.stringify(pincode),
    {status:200, headers:{"content-type":"application/json"}}
  
  )
  }


