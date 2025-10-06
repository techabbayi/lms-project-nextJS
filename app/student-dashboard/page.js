"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import MainLayout from "../components/layout/MainLayout";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Card from "../components/global/card";

const StudentDashboardPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const user = {
        name: searchParams.get("name"),
        email: searchParams.get("email"),
    };

    if (!user.name || !user.email) {
        router.replace("/signin");
        return <div className="text-center mt-10">Redirecting...</div>;
    }

    return (
        <MainLayout sidebar={<Sidebar role="student" />} navbar={<Navbar />}>
            <h1 className="text-3xl font-bold mb-2 text-black">
                Welcome, {user.name}!
            </h1>
            <p className="text-black mb-6">Email: {user.email}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <h2 className="text-xl font-semibold mb-2 text-black">Your Dashboard</h2>
                    <p className="text-black">
                        Here you can see your enrolled courses, grades, and profile info.
                    </p>
                </Card>
            </div>
        </MainLayout>
    );
};

export default StudentDashboardPage;
