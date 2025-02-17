"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"; 
import Link from 'next/link';

const page = () => {
    const router = useRouter();

    const [detailes, setdetailes] = useState([])
    const token = localStorage.getItem('token')
    
     useEffect(() => {

        const checkuser = async()=>{

            const response = await fetch("http://localhost:3000/api/useremail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: localStorage.getItem('token') })
            });
                         
            const res = await response.json();
            console.log("Response:", res.order);

            setdetailes(res.order)

            console.log("Response:", res.email);
            
        }
            
                if(!token){
                  router.push("/");
                }

                else{
                    console.log(localStorage.getItem('token'))
                    checkuser()

                }


                
              }, [])

  return (
    <div className=' items-center p-10 text-center ' >

        {JSON.stringify(detailes)}

        <h1 className=' p-5 m-auto  text-3xl'>My Orders</h1>
        
        

<div className="relative overflow-x-auto p-5">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Current Status
                </th>
                <th scope="col" className="px-6 py-3">
                    order id
                </th>
                <th scope="col" className="px-6 py-3">
                    Date and time
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Details
                </th>
            </tr>
        </thead>
        <tbody>
           
            {detailes.map((item)=>{ return<tr  key={item._id} className="bg-white border-b border-gray-200 hover:bg-green-300 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    
                   {item.status}
                </th>
                <td className="px-6 py-4">
                    {item._id}
                </td>
                <td className="px-6 py-4">
                    {item.createdAt}
                </td>
                <td className="px-6 py-4"> 
                ₹{item.amount}/
                </td>
                <td className="px-6 py-4"> 
                 

                    <Link href={`/order?id=${item._id}`}legacyBehavior >Details</Link>
                </td>
            </tr>})}
           
        </tbody>
    </table>
</div>

      
    </div>
  )
  
}

export default page
