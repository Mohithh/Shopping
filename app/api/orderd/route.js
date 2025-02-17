import Order from "@/models/Order/page";
import connectDB from "@/middleware/mongoose/page";

export const POST = connectDB(async (req) => {
  try {
    const body = await req.json(); // Parse JSON from the request body


    const newOrder = new Order(body);
    await newOrder.save();

    // Respond with the saved order
    return new Response(JSON.stringify({ success: true, data: newOrder }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Return an error response
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
});
