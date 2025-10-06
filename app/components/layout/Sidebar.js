"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

const Sidebar = ({ role }) => {
    let links = [];

    if (role === "admin") {
        links = [
            { href: "/admin/dashboard", label: "Dashboard" },
            { href: "/admin/courses", label: "Manage Courses" },
            { href: "/admin/users", label: "Manage Users" },
        ];
    } else if (role === "student") {
        links = [
            { href: "/student/dashboard", label: "Dashboard" },
            { href: "/student/courses", label: "My Courses" },
            { href: "/student/profile", label: "Profile" },
        ];
    }

    const handleLogout = async () => {
        const loadingToast = toast.loading("Logging out...");
        try {
            await signOut({ callbackUrl: "/signin" });
            toast.dismiss(loadingToast);
            toast.success("Logged out successfully!");
        } catch (err) {
            toast.dismiss(loadingToast);
            toast.error("Logout failed. Try again.");
            console.error(err);
        }
    };

    return (
        <aside className="w-64 bg-white border-r border-purple-200 h-full p-4 hidden md:block shadow-sm">
            <nav className="flex flex-col gap-2">
                {links.map((link, idx) => (
                    <Link
                        key={idx}
                        href={link.href}
                        className="px-3 py-2 rounded-md text-purple-800 hover:bg-purple-100 hover:text-purple-900 transition-colors font-medium"
                    >
                        {link.label}
                    </Link>
                ))}

                {/* Logout button */}
                <button
                    onClick={handleLogout}
                    className="mt-4 px-3 py-2 rounded-md text-white bg-purple-700 hover:bg-purple-900 transition-colors font-medium text-left"
                >
                    Logout
                </button>
            </nav>
        </aside>
    );
};

export default Sidebar;
