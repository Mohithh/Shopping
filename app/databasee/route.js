// app/databasee/route.js
import mongoose from "mongoose";
import Product from "@/models/Products/page";



const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }
  await mongoose.connect(process.env.MONGO_URL);
};

export async function GET(req) {
  try {
    await connectDB(); // Ensure DB connection is established
    const products = await Product.find({ category: "tshirt" });
    return new Response(JSON.stringify(products), { status: 200 }); // Send products as response
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(
      JSON.stringify({ message: "Error fetching products", error }),
      { status: 500 }
    );
  }
}
