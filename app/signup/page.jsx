"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/layout/Navbar";
import InputField from "../components/global/input-field";
import Button from "../components/global/button";
import toast from "react-hot-toast";

const SignupPage = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "student",
    });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.password || !form.role) {
            toast.error("All fields are required!");
            return;
        }

        setLoading(true);
        const loadingToast = toast.loading("Creating your account...");

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.dismiss(loadingToast);
                toast.error(data.error || "Registration failed!");
                setLoading(false);
                return;
            }

            toast.dismiss(loadingToast);
            toast.success("Registration successful! Redirecting to login...");
            setTimeout(() => router.push("/signin"), 2000);
        } catch (err) {
            toast.dismiss(loadingToast);
            toast.error("Unexpected error. Try again!");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="max-w-md mx-auto mt-16">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-xl shadow-lg border border-purple-200"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">
                        Sign Up
                    </h2>

                    <InputField
                        label="Full Name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        disabled={loading}
                    />

                    <InputField
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        disabled={loading}
                    />

                    <InputField
                        label="Password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="At least 6 characters"
                        disabled={loading}
                    />

                    <div className="mb-6">
                        <label htmlFor="role" className="block text-gray-700 mb-2">
                            Role
                        </label>
                        <select
                            id="role"
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded text-black focus:ring focus:border-purple-400 disabled:opacity-50"
                            disabled={loading}
                        >
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <Button type="submit" disabled={loading}>
                        {loading ? "Creating Account..." : "Sign Up"}
                    </Button>

                    <div className="mt-4 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <button
                            type="button"
                            onClick={() => router.push("/signin")}
                            className="text-purple-700 hover:text-purple-900 underline"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignupPage;
