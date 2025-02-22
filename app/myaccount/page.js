"use client"
import React, { useEffect } from 'react'
import { useRouter } from "next/navigation"; 

const page = () => {
        const router = useRouter();
     useEffect(() => {
            const token = localStorage.getItem('token')
        
            if(!token){
              router.push("/");
            }
            
          }, [])
  return (
    <div>
         <div className=' items-center p-10 text-center ' >

<h1 className=' p-5 m-auto  text-3xl'>My account </h1>



<div className="relative overflow-x-auto p-5">
<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
        <th scope="col" className="px-6 py-3">
            Product name
        </th>
        <th scope="col" className="px-6 py-3">
            Color
        </th>
        <th scope="col" className="px-6 py-3">
            Category
        </th>
        <th scope="col" className="px-6 py-3">
            Price
        </th>
    </tr>
</thead>
<tbody>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">
            Silver
        </td>
        <td className="px-6 py-4">
            Laptop
        </td>
        <td className="px-6 py-4">
            $2999
        </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Microsoft Surface Pro
        </th>
        <td className="px-6 py-4">
            White
        </td>
        <td className="px-6 py-4">
            Laptop PC
        </td>
        <td className="px-6 py-4">
            $1999
        </td>
    </tr>
    <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Magic Mouse 2
        </th>
        <td className="px-6 py-4">
            Black
        </td>
        <td className="px-6 py-4">
            Accessories
        </td>
        <td className="px-6 py-4">
            $99
        </td>
    </tr>
</tbody>
</table>
</div>


</div>
      
    </div>
  )
}

export default page
