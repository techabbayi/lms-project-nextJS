"use client";
import React from "react";

const Footer = () => (
    <footer className="w-full bg-gray-100 text-gray-600 text-center py-3 mt-auto border-t">
        &copy; {new Date().getFullYear()} LMS. All rights reserved.
    </footer>
);

export default Footer;
