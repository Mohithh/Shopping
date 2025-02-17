'use client';
import React, { useState } from 'react';
import { useContext } from 'react';
import { FirstContext } from "../layout";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
// import Link from 'next/link';
import { useRouter } from "next/navigation"; 

import { ToastContainer, toast, Bounce } from "react-toastify"; // Import Bounce

import "react-toastify/dist/ReactToastify.css";


const page = () => {
  const router = useRouter();


  const [transaction, settransaction] = useState(true)

  

      const {cart,addtocart ,removeFromCart,clearcart, subtotal} = useContext(FirstContext); // Access values from the context


      const [name, setname] = useState("")
      const [email, setemail] = useState(localStorage.getItem('email'))
      const [address, setaddress] = useState("")
      const [phone, setphone] = useState("")
      const [pincode, setpincode] = useState("")
      const [state, setstate] = useState("")
      const [city, setcity] = useState("")
      const [transaction_id, settransaction_id] = useState("")
      

      const [paybutton, setpaybutton] = useState(true)


      const onchangeform = async(e)=>{

        if(e.target.name == 'name'){
          setname(e.target.value)
        }
        else if(e.target.name =='email'){
          setemail(e.target.value) 
        }
        else if(e.target.name =='address'){
          setaddress(e.target.value)
        }
        else if(e.target.name =='phone'){
          setphone(e.target.value)

         
        }else if(e.target.name =='pincode'){
          setpincode(e.target.value)

          if(e.target.value.length ==6){
            const fpin = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
           const jsonpin = await fpin.json();
         

           if(Object.keys(jsonpin).includes(e.target.value)){
            setcity(jsonpin[e.target.value][1])
            setstate(jsonpin[e.target.value][0])
           }

            

          }
          else{

            setcity("")
            setstate("")
            
          }
        }
        else if(e.target.name =='transaction_id'){
          settransaction_id(e.target.value)
        }

        if(name.length>3 && email.length>5 && address.length>5 && phone.length>=8 && pincode.length>2){
          setpaybutton(false)

        }

      }

      const submitbottton = async (e) => {
        e.preventDefault();
      
     
      
        const userid = "5555555";
        const status = "amount pending";
        
        const data = { 
          email: email, 
          userid, 
          transactionid:transaction_id,
          product:cart,
          address: address, 
          amount: subtotal, // Adding the `amount` field
          status 
        };
      
        try {
          const response = await fetch("http://localhost:3000/api/orderd", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
          });
      
          const res = await response.json();
          console.log("Response:", res);

          toast.success('Payment successfull.', {
          
            position: "top-center",
            autoClose: 2000,
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

            
          }, 2000);


          
        } catch (error) {
          console.log("Error:", error);

          toast.error('Invalid info', {
          
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }
      };
      

  return (
    <div >
      {pincode}
      <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="light"
transition={Bounce}
/>
    
      
      <h1 className='font-bold m-auto items-center text-center py-10 text-2xl'>CheckOut</h1>


      <h2 className="mx-3 font-bold text-xl">1. Delivery Details</h2>


      <form action="">

      <div className='flex px-10  my-5'>

        <div className='m-2  w-1/2'>
          <label   htmlFor="name">Name</label>
          <input required  onChange={onchangeform}  value={name} className='w-full border border-gray-400 rounded p-1  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type="name" name="name" id="name" />
        </div>  
        <div className='m-2 w-1/2'>
          <label htmlFor="email">Email</label>
          <input onChange={onchangeform}  value={email} className=' w-full border border-gray-400 rounded p-1  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type="email" name="email" id="email"  readOnly />
        </div> 

      </div>

      <div className='px-10  m-2 mt-3'>
      <label htmlFor="address">Address</label>
      <textarea onChange={onchangeform}  value={address} className='w-full border border-gray-400 rounded p-1  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type="address" name="address" id="address" rows={2} cols={30} ></textarea>
      </div>

      <div className='flex px-10 '> 

<div className='m-2  w-1/2'>
  <label  htmlFor="phone">Phone</label>
  <input onChange={onchangeform} value={phone} className='w-full border border-gray-400 rounded p-1  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type="number" name="phone" id="phone" />
</div>  
<div className='m-2 w-1/2'>
  <label htmlFor="pincode">Pincode</label>
  <input onChange={onchangeform} value={pincode} className=' w-full border border-gray-400 rounded p-1  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type="tpincode" name="pincode" id="pincode" />
</div>


</div>


<div className='flex px-10 '>

<div className='m-2  w-1/2'>
  <label  htmlFor="city">city</label>
  <input  onChange={onchangeform}  value={city} className='w-full border border-gray-400 rounded p-1  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type="city" name="city" id="city" />
</div> 
<div className='m-2 w-1/2'>
  <label htmlFor="state">state</label>
  <input  onChange={onchangeform} value={state}  className=' w-full border border-gray-400 rounded p-1  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type="state" name="state" id="state"  />
</div>  
 

</div>
</form>


<h2 className="mx-3 font-bold text-xl mt-5">2. Review you cart</h2>


<div>
  
</div>


<div >

  <div className=' mt-5 px-3 py-7 mx-2  flex flex-col items-center bg-pink-100'>
    <h2 className='font-bold text-xl  py-3  '>Shopping Cart </h2>

      <ol className='list-decimal '>
        {Object.keys(cart).length===0 && <div>Your cart is empty</div>}

      {Object.keys(cart).map((item)=>{ return <li key={item}>
       {/* {Object.keys(cart).map((item)=>{ return<li key={item}> */}
        <div className='flex items-center py-1'>
        <span className='px-2'>{cart[item].name}</span>
        <span><CiCircleMinus onClick={()=>{removeFromCart(item,1,499,cart[item].name,"Xl","blue")}} className='text-pink-900' /></span>
        <span className='px-2'>{cart[item].qty}</span>
        <span><CiCirclePlus  onClick={()=>{addtocart(item,1,499,cart[item].name,"Xl","blue")}}  className='text-pink-900'/></span>
        </div>
        
        </li>})}
        
      </ol>


      <p  className='font-bold mt-3 text-xl'>Subtotal = {subtotal}</p>
    <button onClick={()=>{settransaction(!transaction)}}  disabled={paybutton}  className="disabled:bg-green-300 w-1/2  md:w-1/5 m-auto items-center mt-5 mx-2 text-black bg-green-500 border-0 py-3  focus:outline-none hover:bg-indigo-600 rounded">Pay ₹{subtotal}</button>



    
     
    </div>

 
</div>



{!transaction && (
  <div className="fixed h-full  inset-0  bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center text-black">
    <div className="bg-gray-100   rounded-lg shadow-lg p-6 text-center flex flex-col items-center justify-center">
      <img className='w-80 border border-black' src="/payment.jpeg" alt="" />





      <label htmlFor="transaction_id" className=''>transaction_id </label>
      <input onChange={onchangeform}  className='rounded-sm px-1 py-1 border border-black shadow-lg'  type="text" value={transaction_id} name="transaction_id" id="transaction_id" placeholder='Enter Transatin id ' />

      <div className='flex flex-col sm:flex-row'>
      <button  onClick={submitbottton} className=" bg-green-400 w-auto md:w-auto mx-1 my-5  px-6 py-2 rounded-lg ">Pay_₹{subtotal}/</button>
      <button onClick={()=>{settransaction(!transaction)}} className=" bg-red-400 px-4 mx-1 w-32 md:w-24 my-2 md:my-5 py-2 rounded-lg ">Cancle</button>

      </div>
     

    </div>
  </div>
)}






      
    </div>
  )
}

export default page
