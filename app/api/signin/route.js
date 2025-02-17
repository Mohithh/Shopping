import connectDB from "@/middleware/mongoose/page";
import User from "@/models/Users/page";
import CryptoJS from "crypto-js";
var jwt = require('jsonwebtoken');

export const POST = connectDB(async (req, res) => {
    const body = await req.json();

    // Check if the user already exists
    const existingUser = await User.findOne({ "email": body.email });

    if (existingUser) {
        return new Response(
            JSON.stringify({ success: false, error: "Email already registered" }),
            { status: 400, headers: { "content-type": "application/json" } }
        );
    }

    

 
        const encryptedPassword = CryptoJS.AES.encrypt(body.password, 'mohit').toString();

        const newUser = new User({
            name: body.name,
            email: body.email,
            password: encryptedPassword,
        });

        await newUser.save();

        var token = jwt.sign(
            { success: true, email: body.email, name: body.name },
            'jwttokenn',
            { expiresIn: '1d' }
        );

        return new Response(
            JSON.stringify({ success: true, token }),
            { status: 201, headers: { "content-type": "application/json" } }
        );
    
});
