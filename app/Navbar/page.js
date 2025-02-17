"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/navigation"; 
import { IoIosCloseCircle } from "react-icons/io";



import { useContext } from "react";
import { FirstContext } from "../layout";

// const [userbutton, setuserbutton] = useState(false)

const page = () => {
  const router = useRouter();

  const [useropen, setuseropen] = useState(false)
    const {userr,cart,addtocart ,removeFromCart,clearcart, subtotal} = useContext(FirstContext); // Access values from the context

  
// const page = ({cart,addToCart,removeFromCart,clearCart}) => {
  // console.log(cart,addToCart,removeFromCart,clearCart)


  const [first, setfirst] = useState(false)

  

  


  const [responnavbar, setresponnavbar] = useState(true)
  const resnav = ()=>{
    if(responnavbar===true){

    
    setresponnavbar(false)
    }
    else{
      setresponnavbar(true)

    }

  }


  const cartclick =()=>{
    if(first===true){
      setfirst(false)

    }  
    if(first===false){
      setfirst(true)

    }
   
  }
  const logout = ()=>{
    localStorage.removeItem('token')
    router.push("/login");
    setuseropen(!useropen)
  }
  
  return (
    
    <div className='sticky top-0 z-10'>


<nav className="bg-white shadow-lg  ">
  <div  className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className={`mx-2 font-bold text-xl absolute inset-y-0 left-0 flex items-center `}>
      <BsThreeDotsVertical onClick={resnav} className='sm:hidden' />

      </div>
      <div className="flex flex-1 items-center justify-center md:items-stretch sm:justify-start">
        <div className="flex shrink-0  items-center"> 
            <img  className='h-8 relative right-6  md:h-10 w-auto ' src="/logo.png " alt="" />



        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <Link href="/tshirt" className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white">T-Shirt</Link>
            <Link href="/hoodies" className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white">Hoodies</Link>
            <Link href="/sticker" className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white">Stickers</Link>
            <Link href="/mugs" className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white">Mugs</Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div>
 


{<div className='flex items-center '>
{userr.value && <FaUser onClick={()=>{setuseropen(!useropen)}}  className='text-2xl mx-3'/>}
{!userr.value &&<Link href={"/login"}>
<button className='  bg-pink-500 px-2 py-2 text-sm mx-1 w-auto sm:w-20 sm:mx-3 m-auto rounded text-white'>Login</button>


</Link>}

<FaCartPlus className='text-2xl' onClick={cartclick} />


{useropen &&<div  className='flex absolute  rounded right-1 items-end   justify-end top-14 bg-white border  shadow-2xl '>

  <ul>
  <Link href={"/myaccount"}> <div  className='px-10 py-1 hover:bg-gray-700 hover:text-white'>Account </div> </Link> 
  <Link href={"/orders"}> <div className='px-10 py-1  hover:bg-gray-700 hover:text-white'>Orders</div></Link> 
    <div onClick={logout}  className='px-10 py-1 cursor-pointer  hover:bg-gray-700 hover:text-white'>LogOut</div>
    <div className='px-3 py-1'></div> 
  </ul>

</div>}
 
 
</div> }





        </div>

       
      </div>
    </div>
  </div>

  

  <div className={` ${responnavbar ? 'hidden' : 'sm:hidden'}  `} id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <Link href="/tshirt" className="block rounded-md px-3 py-2 text-base font-medium text-black-300 hover:bg-gray-700 hover:text-white">T-shirts</Link>
      <Link href="/hoodies" className="block rounded-md px-3 py-2 text-base font-medium text-black-300 hover:bg-gray-700 hover:text-white">Hoodies</Link>
      <Link href="/stickers" className="block rounded-md px-3 py-2 text-base font-medium text-black-300 hover:bg-gray-700 hover:text-white">Stickers</Link>
      <Link href="/mugs" className="block rounded-md px-3 py-2 text-base font-medium text-black-300 hover:bg-gray-700 hover:text-white">Mugs</Link>
    </div>
  </div>
</nav>


<div  className={` overflow-y-scroll fixed top-0 right-0 h-full md:w-80 w-72  text-black bg-red-100 shadow-2xl  transition-transform ${
          first ? "translate-x-0" : "translate-x-full"
        }`}>

  <div  className='px-3 py-7   flex flex-col items-center  bg-red-100   '>
  <IoIosCloseCircle onClick={cartclick} className='text-3xl text-black'/>

    <h2 className='font-bold text-xl  py-3 '>Shopping Cart </h2>

      <ol className='list-decimal  px-5 '>
        {Object.keys(cart).length===0 && <div>Your cart is Empty</div>}

      {Object.keys(cart).map((item)=>{ return <li key={item}>
       {/* {Object.keys(cart).map((item)=>{ return<li key={item}> */}
        <div className='flex items-center py-1'>
        <span className='px-2'>{cart[item].name}..({cart[item].varient}/{cart[item].size})</span>
        <span><CiCircleMinus onClick={()=>{removeFromCart(item,1,499,cart[item].name,cart[item].size,cart[item].varient)}} className='text-pink-900' /></span>
        <span className='px-2'>{cart[item].qty}</span>
        <span><CiCirclePlus  onClick={()=>{addtocart(item,1,499,cart[item].name,cart[item].size,cart[item].varient)}}  className='text-pink-900'/></span>
        </div>
        </li>})}
        <p className='font-bold mt-3 text-xl'>Subtotal ={subtotal}₹</p>

        
      </ol>

      <div className='flex my-7'>
      <Link href={"/checkout"}><button  className="flex mx-1  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Check out</button></Link>
      <button onClick={clearcart} className="flex mx-1 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">clear cart</button>
    
      </div>


    
     
    </div>


 
</div>


       
      
    </div>
  )
}

export default page
