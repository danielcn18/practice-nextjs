/* Importing the User model, connect function (presumably for connecting to a MongoDB database), 
bcrypt for password hashing, and NextResponse from the "next/server" library. */
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    // Extracting and destructuring Request Data's name, email, and password from the JSON data in the incoming HTTP POST request.
    const { name, email, password } = await request.json();

    // Establishing a connection to the MongoDB database using the connect function.
    await connect(); // connecting to mongodb
    
    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });

    // will try saving the new User to mongodb and returning a response
    try {
        await newUser.save();
        //
        return new NextResponse("User has been created", {
            status: 201,
        });
    } 
    //
    catch (err) {
        //
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};