"use client";
import React from "react";
import { Toaster } from "react-hot-toast";

const MainLayout = ({ navbar, sidebar, children, footer }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-900">
            {/* Navbar */}
            <header className="shadow-md z-50">{navbar}</header>

            {/* Main content with sidebar */}
            <div className="flex flex-1 w-full">
                {sidebar && (
                    <aside className="hidden md:block w-64 bg-white border-r border-purple-200 p-6 shadow-sm">
                        {sidebar}
                    </aside>
                )}
                <main className="flex-1 p-6 md:p-8 bg-purple-50 min-h-screen">
                    {children}
                </main>
            </div>

            {/* Footer */}
            {footer && (
                <footer className="bg-purple-100 py-4 text-center text-sm text-purple-800 border-t border-purple-200">
                    {footer}
                </footer>
            )}

            {/* Global Toast */}
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 4000,
                    style: { background: "#7c3aed", color: "#fff" },
                    success: { duration: 3000, iconTheme: { primary: "#22c55e", secondary: "#fff" } },
                    error: { duration: 4000, iconTheme: { primary: "#ef4444", secondary: "#fff" } },
                }}
            />
        </div>
    );
};

export default MainLayout;
