'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { createContext, useEffect, useState } from "react";
import Navbar from "@/app/Navbar/page";
// import Footer from "@/app/Footer/page"
import Head from "next/head"; // Import Head for meta tags
import { useRouter } from "next/navigation"; 
import LoadingBar from "react-top-loading-bar";


import { useSearchParams } from "next/navigation";


export const FirstContext = createContext(); // Export the context





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
    const router = useRouter();
  
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);

  


  
  const [first, setFirst] = useState(55); 
  const [second, setSecond] = useState(10); 
  const [third, setThird] = useState(200); 





  const [cart, setcart] = useState({})
  const [subtotal, setsubtotal] = useState(0)

  const [userr, setuserr] = useState({value:null})


  const savecart = (savecart)=>{
    localStorage.setItem("cart" ,JSON.stringify(savecart));

    let subt = 0;
    let keys = Object.keys(savecart)
    for(let i=0;i< keys.length; i=i+1){
      subt = subt+ (savecart[keys[i]].price * savecart[keys[i]].qty)
    }
    localStorage.setItem("subtotal",JSON.stringify(subt))
    setsubtotal(subt)

  }

  useEffect(() => {

    setProgress(10)



    try {
      if(localStorage.getItem("cart")){
        setcart(JSON.parse(localStorage.getItem("cart")))
        setsubtotal(JSON.parse(localStorage.getItem("subtotal")))

        // console.log("this is running ")

      }   
      
    } catch (error) {
      console.error(error)
      localStorage.clear()
      
    }
    const paramValue = searchParams.get("yourParamName"); // Replace "yourParamName" with your parameter
    // console.log("Query Param:", paramValue);


    const token =  localStorage.getItem('token')

    if(token){
      setuserr({value:token})
    }
    else{
      setuserr({value:null})


    }
    setTimeout(() => {
      setProgress(100); // Complete progress after 1s
    }, 30);


    

  }, [searchParams])  


  
 

  const addtocart = (itemcode,qty,price,name,size,varient)=>{
    const mycart=cart;

    if(itemcode in mycart){

      mycart[itemcode].qty = cart[itemcode].qty + qty

    }
    else{
      mycart[itemcode] = {qty:1,price,name,size,varient}

    }
    setcart(mycart)
    savecart(mycart)

  }
  const removeFromCart = (itemcode,qty,price,name,size,varient)=>{
    const mycart=cart;

    if(itemcode in mycart){

      mycart[itemcode].qty = cart[itemcode].qty - qty

    }
    if(mycart[itemcode].qty<=0){
      delete mycart[itemcode]

    }
    
    setcart(mycart)
    savecart(mycart)

  }
  // const clearcart = ()=>{
  //   setcart({})
  //   savecart({})

  // }
  const clearcart = async () => {
    return new Promise((resolve) => {
        setcart({})
    savecart({})
      // Empty the cart
      resolve();  // Resolve immediately, allowing `await clearcart()` to work
    });
  };
  



  return (
    <html lang="en">
      <Head>
        {/* Meta Tags */}
        <title>My App</title>
        <meta name="description" content="This is a description of the app" />
        <meta name="keywords" content="Next.js, React, Client Components" />
        <meta name="author" content="Your Name" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <FirstContext.Provider
          value={{userr,cart,addtocart ,removeFromCart,clearcart, subtotal,first, setFirst, second, setSecond, third, setThird }} // Include all states in the context
        >
           <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
          <Navbar />
          {children }
          {/* <Footer/> */}
        </FirstContext.Provider>
      </body>
    </html>
  );
}
