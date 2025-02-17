// "use client";
// import React, { useState } from "react";
// const Page = () => {
//   const [cart, setCart] = useState(false);
//   const toggleCart = () => {
//     setCart(!cart);
//   };
//   return (
//     <div className="h-screen">
//       {/* Button to Toggle Cart */}
//       <button onClick={toggleCart} className="bg-pink-500 px-4 py-2 text-white">
//         Toggle Cart
//       </button>
//       {/* Side Cart (Right Side) */}
//       <div
// className={`fixed top-0 right-0 h-full w-64 bg-pink-800 text-white transition-transform ${
//   cart ? "translate-x-0" : "translate-x-full"
// }`}
//       >
//         <div className="p-4">
//           <p>This is the side cart</p>
//           <button
//             onClick={toggleCart}
//             className="bg-red-500 px-4 py-2 text-white mt-4"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Page;
// "use client"; // Ensure this is the first line
// import React, { useEffect } from "react";
// import { ToastContainer, toast, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/navigation"; 
// const Page = () => {
// const router = useRouter();
//   useEffect(() => {
//     // Trigger a toast notification when the component mounts
//     toast.success("🦄 Wow so easy!", {
//       position: "top-center",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       transition: Bounce,
//     });
//   }, []);
//   const onclick = () => {
// router.push("/login"); // Use `router.push` for navigation
//   };
//   const triggerToast = () => {
//     toast.info("🔔 This is another toast notification!", {
//       position: "top-center",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={triggerToast}>Notify!</button> {/* Button triggers the toast */}
//         <ToastContainer
//           position="top-center"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//           transition={Bounce}
//         />
//       </div>
//       <button onClick={onclick}>Change Page</button> {/* Button navigates to login */}
//     </div>
//   );
// };
// export default Page;
"use strict";