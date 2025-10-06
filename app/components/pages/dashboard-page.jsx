"use client";
import React from "react";
import MainLayout from "../layout/MainLayout";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import Card from "../global/card";
import { BookOpen, Users, LayoutDashboard } from "lucide-react";

const DashboardPage = () => (
    <MainLayout sidebar={<Sidebar role="admin" />} navbar={<Navbar />}>
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Welcome Section */}
            <Card className="hover:shadow-xl transition-shadow border-l-4 border-amber-500 bg-gradient-to-r from-amber-50 to-white">
                <div className="flex items-center gap-3 mb-3">
                    <LayoutDashboard className="text-amber-600 w-6 h-6" />
                    <h2 className="text-xl font-semibold text-gray-800">Welcome!</h2>
                </div>
                <p className="text-gray-600">
                    This is your admin dashboard. Here you can manage courses, track
                    progress, and organize users in one place.
                </p>
            </Card>

            {/* Courses Section */}
            <Card className="hover:shadow-xl transition-shadow border-l-4 border-indigo-500 bg-gradient-to-r from-indigo-50 to-white">
                <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="text-indigo-600 w-6 h-6" />
                    <h2 className="text-xl font-semibold text-gray-800">Manage Courses</h2>
                </div>
                <p className="text-gray-600">
                    Create, edit, and update courses to keep your learning platform fresh
                    and engaging.
                </p>
            </Card>

            {/* Users Section */}
            <Card className="hover:shadow-xl transition-shadow border-l-4 border-emerald-500 bg-gradient-to-r from-emerald-50 to-white">
                <div className="flex items-center gap-3 mb-3">
                    <Users className="text-emerald-600 w-6 h-6" />
                    <h2 className="text-xl font-semibold text-gray-800">Manage Users</h2>
                </div>
                <p className="text-gray-600">
                    Add new users, assign roles, and monitor student activity across the
                    platform.
                </p>
            </Card>
        </div>
    </MainLayout>
);

export default DashboardPage;
