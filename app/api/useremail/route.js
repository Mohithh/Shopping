import Order from "@/models/Order/page";
import connectDB from "@/middleware/mongoose/page";

var jwt = require('jsonwebtoken');

export const POST = connectDB(async (req, res) => {
    const body = await req.json();
    const token = body.token;

    const data = jwt.verify(token, "jwttokenn");
    const order = await Order.find({ email: data.email });

    return new Response(
        JSON.stringify({ success: true, email: data.email, order }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
});


