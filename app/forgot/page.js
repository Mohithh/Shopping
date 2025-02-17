"use client"
import React, { useEffect } from 'react'
import { CiUser } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from "next/navigation"; 

const page = () => {
    const router = useRouter();
  useEffect(() => {
        const token = localStorage.getItem('token')
    
        if(token){
          router.push("/");
        }
        
      }, [])
  return (
    <div className=' '>


      <div className='w-64  md:w-1/4  m-auto mb-20 items-center text-center mt-20'>

      <FaRegUserCircle className='text-5xl items-center m-auto ' />


        <h2 className='mt-5 font-bold text-2xl'>Forgot password  </h2>


        <form action="">

       <div className='m-2 '>
      <label className='' htmlFor="email">Email</label>
      <input className='  mt-2 w-full border border-gray-400 rounded   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' placeholder='Email id' type="email" name="email" id="email" />

</div>   


    

<button  className=" w-full m-auto items-center mt-5  text-white bg-pink-500 border-0 py-3  focus:outline-none hover:bg-indigo-600 rounded">Continue </button>

{/* <div className='flex '> */}
 <Link href="/signup"> <p className='mx-10 mt-5 text-blue-500  font-extralight '> sign up</p></Link>
 <Link href="login"> <p className='mx-10 mt-5 text-blue-500 font-extralight'>Login</p></Link>

{/* </div> */}



        
        </form>




        

      </div>
   
    </div>
  )
}

export default page
