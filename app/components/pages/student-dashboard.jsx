"use client";
import React from "react";
import MainLayout from "../layout/MainLayout";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import Card from "../global/card";
import { BookOpen, User, Award } from "lucide-react";

const StudentDashboardPage = () => (
    <MainLayout sidebar={<Sidebar role="student" />} navbar={<Navbar />}>
        {/* Page Header */}
        <h1 className="text-3xl font-bold mb-8 text-teal-800">
            🎓 Student Dashboard
        </h1>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Welcome Card */}
            <Card className="bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-xl hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-3 mb-3">
                    <User className="text-teal-600 w-7 h-7" />
                    <h2 className="text-xl font-semibold text-teal-900">Welcome!</h2>
                </div>
                <p className="text-teal-700">
                    This is your personalized student dashboard. Explore your courses,
                    track progress, and manage your profile easily.
                </p>
            </Card>

            {/* Enrolled Courses */}
            <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-xl hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="text-indigo-600 w-7 h-7" />
                    <h2 className="text-xl font-semibold text-indigo-900">My Courses</h2>
                </div>
                <p className="text-indigo-700">
                    View and access your enrolled courses. Continue learning where you left
                    off, anytime.
                </p>
            </Card>

            {/* Grades & Progress */}
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-xl hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-3 mb-3">
                    <Award className="text-amber-600 w-7 h-7" />
                    <h2 className="text-xl font-semibold text-amber-900">My Progress</h2>
                </div>
                <p className="text-amber-700">
                    Track your grades, achievements, and progress to stay motivated and on
                    top of your goals.
                </p>
            </Card>
        </div>
    </MainLayout>
);

export default StudentDashboardPage;
