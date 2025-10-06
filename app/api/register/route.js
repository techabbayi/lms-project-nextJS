// app/api/register/route.js
import { NextResponse } from "next/server";
import connectToDatabase from "../../utils/mongodb";
import User from "../../models/User";
import bcrypt from "bcryptjs";

export async function POST(request) {
    try {
        const body = await request.json();
        const { email, password, name, role } = body;

        if (!email || !password || !name || !role)
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });

        if (!["student", "admin"].includes(role))
            return NextResponse.json({ error: "Invalid role selected" }, { status: 400 });

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email))
            return NextResponse.json({ error: "Invalid email format" }, { status: 400 });

        if (password.length < 6)
            return NextResponse.json(
                { error: "Password must be at least 6 characters long" },
                { status: 400 }
            );

        await connectToDatabase();

        const existingUser = await User.findOne({ email });
        if (existingUser)
            return NextResponse.json({ error: "User already exists" }, { status: 400 });

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await User.create({ email, password: hashedPassword, name, role });

        return NextResponse.json(
            {
                message: "User registered successfully",
                user: { id: newUser._id.toString(), email, name, role },
            },
            { status: 201 }
        );
    } catch (err) {
        console.error("Registration error:", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
