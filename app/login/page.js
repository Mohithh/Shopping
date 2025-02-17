"use client"

import React, { useEffect, useState } from 'react'
import { CiUser } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import Link from 'next/link';

import { ToastContainer, toast, Bounce } from "react-toastify"; // Import Bounce
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation"; 



const page = () => {
  const router = useRouter();






  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token){
      router.push("/");
    }
    
  }, [])
  
  // localStorage.removeItem('token'); // Removes the token


  
  

  const [email, setemail] = useState("") 
  const [password, setpassword] = useState("")

  const onchangeevent = (e)=>{
    if(e.target.name=="email"){
      setemail(e.target.value)
    }
    else if(e.target.name=="password"){
      setpassword(e.target.value)
    }

    

  }

  const submitbottton = async(e)=>{
    e.preventDefault()


    const data = {email,password}
    
 
    // const response = await fetch("http://localhost:3000/api/login", {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {

      method: "POST",
      headers:{"context-type":"application/json"},
      body:JSON.stringify(data)
    });

    const res = await response.json()

if(res.success){
  console.log("odsnmfds")
  localStorage.setItem('email',email)

localStorage.setItem('token',res.token)
   toast.success("successfully Log in ", {
        
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });

          setTimeout(() => {
            
            router.push("/"); 
          }, 1000);
  
}

else  {
   toast.error(res.error , {
        
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
}
 
  }
  return (
    <div className=' '>
           <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Bounce} // Use Bounce here as well
              />
   

   



      


      <div className='w-64 md:w-1/4 m-auto mb-20 items-center text-center mt-20  border-green-600'>

      <FaRegUserCircle className='text-5xl items-center m-auto ' />


        <h2 className='mt-5 font-bold text-2xl'>Login in Your Accountt  </h2>


        <form onSubmit={submitbottton} action="">

       <div className='m-2 '>
      <label className='' htmlFor="email">Email</label>
      <input onChange={onchangeevent} className='mt-2 w-full border border-gray-400 rounded p-1  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' placeholder='Email id' type="email" name="email" id="email" required value={email} />

</div>   


     <div className='m-2 '>
      <label htmlFor="password">Password</label>
      <input onChange={onchangeevent} className='mt-2 w-full border border-gray-400 rounded p-1  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type="password" name="password" id="password" value={password} required placeholder='Password' />
</div> 

<button  className=" w-full m-auto items-center mt-5 mx-2 text-white bg-pink-500 border-0 py-3  focus:outline-none hover:bg-indigo-600 rounded">Sign in </button>




{/* <div className='flex '> */}
 <Link href="/signup"> <p className='mx-10 mt-5 text-blue-500  font-extralight '> sign up</p></Link>
 <Link href="forgot"> <p className='mx-10 mt-5 text-blue-500 font-extralight'>forgot password</p></Link>

{/* </div> */}



        
        </form>

      </div>

      </div>
   
  )
}

export default page
