import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "../../../lib/mongodb";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export default NextAuth({
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                await connectDB();
                const user = await User.findOne({ email: credentials.email });
                if (!user) throw new Error("No user found with this email");

                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) throw new Error("Invalid password");

                return { id: user._id, email: user.email, name: user.name, role: user.role };
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
});
