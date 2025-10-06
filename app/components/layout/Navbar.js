"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => (
    <nav className="w-full bg-purple-800 text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="font-bold text-xl tracking-wide">Kalvium LMS</div>
        <div className="flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-purple-300 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-purple-300 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-purple-300 transition-colors">Contact</Link>
            <Link href="/signin" className="hover:text-purple-300 transition-colors">Login</Link>
        </div>
    </nav>
);

export default Navbar;
