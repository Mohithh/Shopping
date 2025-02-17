import mongoose from "mongoose";

const connectDB = handler => async (req,res)=>{
    

    if(mongoose.connections[0].readyState){
        return handler(req ,res)
    }
    await mongoose.connect(process.env.MONGO_URL)
    return handler(req,res);
}
export default connectDB;


// import mongoose from "mongoose";

// const connectDB = (handler) => async (req, res) => {
//   if (mongoose.connections[0].readyState) {
//     // If the database is already connected, proceed with the handler
//     return handler(req, res);
//   }

//   try {
//     // Connect to MongoDB
//     await mongoose.connect(process.env.MONGO_URL);
//     return handler(req, res);
//   } catch (error) {
//     console.error("Database connection error:", error);
//     res.status(500).json({ message: "Database connection failed", error });
//   }
// };

// export default connectDB;




// databasee/page.js 
// import mongoose from "mongoose";
// import Product from "@/models/Products/page"; // Ensure this is the correct path to your model

// const handler = async (req, res) => {
//   try {
//     // Connect to MongoDB
//     if (!mongoose.connections[0].readyState) {
//       await mongoose.connect(process.env.MONGO_URL);
//     }
//     console.log("connectexxxx")

//     // Fetch data from your MongoDB collection
//     const product = await Product.find({ category: "tshirt" });

//     // Send the fetched data as the response
//     res.status(200).json(product); // Corrected: send 'product' instead of 'data'
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// };

// export default handler;
