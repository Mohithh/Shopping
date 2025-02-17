"use client"
import { useEffect, useState } from 'react';


import { useParams } from 'next/navigation';

import { useContext } from "react";
import { FirstContext } from "@/app/layout";



export default  function Page() {

   const {cart,addtocart ,removeFromCart,clearcart, subtotal} = useContext(FirstContext); // Access values from the context
  
  const params = useParams();
  const decodedSlug = decodeURIComponent(params.slug); 


  const [pin, setpin] = useState()


  const [avapincode, setavapincode] = useState(true)
  const [notavpincode, setnotavpincode] = useState(true)

  const pincodebtn = async()=>{

   
    

    const fpin = await fetch("http://localhost:3000/api/pincode")
    const jsonpin = await fpin.json();

    if(jsonpin.includes(Number(pin))){
     8264000755

        setavapincode(false)
        setnotavpincode(true)
    }
    else{
         
        setavapincode(true)
        setnotavpincode(false)
    }
  }

  const onchange = (e)=>{
    setpin(e.target.value)
  }
  const [product, setproduct] = useState();
  const [color, setcolor] = useState();
  const [size, setsize] = useState();
  const [slug, setSlug] = useState(""); // New state for tracking the slug
  const [variants, setvariants] = useState({}); 
  
  useEffect(() => {
    const alldata = async () => {
      const fetchdata = await fetch("http://localhost:3000/api/getproducts");
      const allproduct = await fetchdata.json();
  
      const product = allproduct.success.find((item) => item.slug === decodedSlug);
      const variantList = allproduct.success.filter((item) => item.title === product.title);
  
      const variantObject = {};
      for (let item of variantList) {
        if (!variantObject[item.color]) {
          variantObject[item.color] = {};
        }
        variantObject[item.color][item.size] = { slug: item.slug }; // Only available sizes are added
      }
  
      setproduct(product);
      setcolor(product.color);
      setsize(product.size);
      setvariants(variantObject);
    };
    alldata();
  }, [decodedSlug]);
  
  
  const refreshVariant = (newSize, newColor) => {
    // Fetch the slug for the selected size and color combination
    const newSlug = variants[newColor]?.[newSize]?.slug;
  
    if (newSlug) {
      setSlug(newSlug); // Update the slug state
    }
  };
  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    setsize(newSize);
    refreshVariant(newSize, color); // Refresh variant with the new size
  };
  
  // Update color when user selects a color
  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setcolor(newColor);
    refreshVariant(size, newColor); // Refresh variant with the new color
  };
  
  
  
  
  

//   return <p>Post: {decodedSlug}</p>;


  return <>

<div>

  <div>
  <div>
    {/* Size dropdown */}
    <select value={size} onChange={handleSizeChange} className="size-selector">
      {['S', 'M', 'L', 'X', 'XL', 'XXL'].map((sizeOption) => (
        <option key={sizeOption} value={sizeOption}>
          {sizeOption}
        </option>
      ))}
    </select>

    {/* Color dropdown: Show colors based on selected size */}
    {size && (
      <select value={color} onChange={handleColorChange} className="color-selector">
        {Object.keys(variants).map((colorOption) => {
          // Only show colors that are available for the selected size
          if (variants[colorOption]?.[size]) {
            return (
              <option key={colorOption} value={colorOption}>
                {colorOption}
              </option>
            );
          }
          return null; // If no color is available for this size, do not show it
        })}
      </select>
    )}

    {/* Display the selected slug */} 
    <div>
      {slug ? (
        <p>Selected Slug: <a href={`/product/${slug}`}>{slug}</a></p>
      ) : (
        <p>No slug available for the selected size and color.</p>
      )}
    </div>


    </div>
  
    
  </div>
  