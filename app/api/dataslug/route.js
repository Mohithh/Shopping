import mongoose from "mongoose";
import Product from "@/models/Products/page";

export async function GET(request) {
  try {
    // Connect to MongoDB
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URL);
    }

    // Fetch products from the database
    const products = await Product.find({ category: "tshirt" });

    // Return the products as JSON
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
