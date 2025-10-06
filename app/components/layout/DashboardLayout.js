"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <div className="flex flex-1">
                <aside className="w-64 bg-gray-800 text-white p-6 hidden md:block">
                    <h2 className="text-lg font-bold mb-4">Dashboard Menu</h2>
                    <ul className="space-y-3">
                        <li><a href="/dashboard" className="hover:text-blue-400">Overview</a></li>
                        <li><a href="/dashboard/courses" className="hover:text-blue-400">My Courses</a></li>
                        <li><a href="/dashboard/settings" className="hover:text-blue-400">Settings</a></li>
                    </ul>
                </aside>
                <main className="flex-1 p-6">{children}</main>
            </div>
            <Footer />
        </div>
    );
}
