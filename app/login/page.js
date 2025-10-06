"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Login() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex items-center justify-center px-6">
                <div className="bg-blue shadow-md rounded-lg p-8 w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                    <form className="space-y-4">
                        <input type="email" placeholder="Email" className="w-full border rounded px-3 py-2 focus:outline-blue-500" />
                        <input type="password" placeholder="Password" className="w-full border rounded px-3 py-2 focus:outline-blue-500" />
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
