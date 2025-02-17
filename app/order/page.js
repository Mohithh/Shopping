'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const Page = () => {
    const searchParams = useSearchParams();

    const [value, setValue] = useState(null); // Set to null initially to handle loading state
    const [loading, setLoading] = useState(true); // For handling the loading state

    const id = searchParams.get('id');

    useEffect(() => {
        if (!id) {
            console.log("No id found in query parameters");
            return;
        }

        const fetchOrder = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/findorder", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id }) // Send id as an object
                });

                const res = await response.json();
                console.log("Response:", res);

                if (res.success) {
                    setValue(res.success); // Update state with the `success` object
                } else {
                    console.error("Failed to fetch order details.");
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching order:", error);
                setLoading(false);
            }
        };

        fetchOrder();
    }, [id]);   
    if (loading)
      return (
          <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
              <section className="text-gray-600 body-font overflow-hidden">
                  <div className="container px-5 py-24 mx-auto">
                      <div className="lg:w-4/5 mx-auto flex flex-wrap">
                          {/* Left Section (Text & Order Details) */}
                          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                              <Skeleton width={150} height={20} />
                              <Skeleton width={250} height={30} />
                              <Skeleton width={300} height={20} />
                              <Skeleton width={200} height={20} />
                              <Skeleton width={280} height={20} />
                              <Skeleton width={250} height={20} />
                              {/* Table Headers */}
                              <div className="flex mb-4 items-center text-center justify-center">
                                  <Skeleton width={120} height={30} />
                                  <Skeleton width={100} height={30} />
                                  <Skeleton width={100} height={30} />
                              </div>
                              {/* Products List (Simulated Multiple Items) */}
                                  <div  className="flex border-t items-center text-center justify-center border-gray-100 py-2 hover:bg-gray-100">
                                      <Skeleton width={180} height={20} />
                                      <Skeleton width={80} height={20} />
                                      <Skeleton width={80} height={20} />
                                  </div>
                              <Skeleton width={200} height={30} />
                                <Skeleton width={180} height={40} />
                          </div>
  
                          {/* Right Section (Image Placeholder) */}
                          <Skeleton width={400} height={400} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" />
                      </div>
                  </div>
              </section>
          </SkeletonTheme>
      );// Show loading state while fetching

    if (!value) return <div>No order found.</div>; // Show this if no data is fetched

    return (
        <div>

          {/* {JSON.stringify(JSON.parse(value))} */}
            {/* <h1>Order Details</h1>
            <p><strong>Order ID:</strong> {value._id}</p>
            <p><strong>Email:</strong> {value.email}</p>
            <p><strong>User ID:</strong> {value.userid}</p>
            <p><strong>Transaction ID:</strong> {value.transactionid}</p>
            <p><strong>Address:</strong> {value.address}</p>
            <p><strong>Amount:</strong> {value.amount}</p>
            <p><strong>Status:</strong> {value.status}</p>
            <p><strong>Created At:</strong> {new Date(value.createdAt).toLocaleString()}</p>
            <p><strong>Updated At:</strong> {new Date(value.updatedAt).toLocaleString()}</p> */}

            {/* <h2>Products</h2>
            {value.product && Object.keys(value.product).map((key) => (
                <div key={key} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                    <p><strong>Product ID:</strong> {key}</p>
                    <p><strong>Name:</strong> {value.product[key].name}</p>
                    <p><strong>Quantity:</strong> {value.product[key].qty}</p>
                    <p><strong>Price:</strong> {value.product[key].price}</p>
                    <p><strong>Size:</strong> {value.product[key].size}</p>
                    <p><strong>Variant:</strong> {value.product[key].varient}</p>
                </div>
            ))} */}
 

            
<section className="text-gray-600 body-font overflow-hidden">



<div className="container px-5 py-24 mx-auto">
  <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
      <h2 className="text-sm title-font text-gray-500 tracking-widest">Codeswear.com</h2>
      <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Order id: #{value._id}</h1>
      <p className="text-green-500 leading-relaxed mb-2">Your order has been placed successfully</p>
      <p className="leading-relaxed mb-1">Email:__{value.email}</p>
      <p className="leading-relaxed mb-1">Address:__{value.address}</p>
      <p className="leading-relaxed mb-1">transactionid:__{value.transactionid}</p>

      <div className="flex mb-4 items-center text-center justify-center">
        <a className="flex-grow py-2 text-lg px-1">Item Name </a>
        <a className="flex-grow border-gray-300 py-2 text-lg px-1">Quantity</a>
        <a className="flex-grow border-gray-300 py-2 text-lg px-1">Price</a>
      </div>



      {/* <h2>Products</h2>
            {value.product && Object.keys(value.product).map((key) => (
                <div key={key} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                    <p><strong>Product ID:</strong> {key}</p>
                    <p><strong>Name:</strong> {value.product[key].name}</p>
                    <p><strong>Quantity:</strong> {value.product[key].qty}</p>
                    <p><strong>Price:</strong> {value.product[key].price}</p>
                    <p><strong>Size:</strong> {value.product[key].size}</p>
                    <p><strong>Variant:</strong> {value.product[key].varient}</p>
                </div>
            ))} */}

      

{value.product && Object.keys(value.product).map((key) => {
  return (
    <div key={key} className="flex border-t items-center text-center justify-center border-gray-100 py-2 hover:bg-gray-100">
      <span className="text-gray-500">{value.product[key].name}_ ({value.product[key].varient}/_{value.product[key].size})</span>
      <span className="ml-auto text-gray-900">{value.product[key].qty}</span>
      <span className="ml-auto text-gray-900">{value.product[key].price}</span>
      {/* <span className="ml-auto text-gray-900">{value.product}</span> */}
    </div>
  );
})}

     

      <div className="flex">
        <span className="mt-5 title-font font-medium text-2xl text-gray-900">Subtotal: {value.amount}</span>
      </div>
      <div>
        <button className="flex mt-5 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track your order</button>
      </div>
    </div>
    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
  </div>
</div>
</section>
        </div>
    );
};

export default Page;


