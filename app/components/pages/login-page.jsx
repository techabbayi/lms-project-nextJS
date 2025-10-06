"use client";
import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import InputField from "../global/input-field";
import Button from "../global/button";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

const LoginPage = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            toast.error("Email and password are required!");
            return;
        }

        setLoading(true);
        const loadingToast = toast.loading("Signing you in...", { duration: Infinity });

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: form.email,
                password: form.password,
            });

            if (res?.error) {
                toast.dismiss(loadingToast);
                toast.error("Invalid email or password.");
                setLoading(false);
                return;
            }

            const session = await getSession();
            toast.dismiss(loadingToast);
            toast.success(`Welcome ${session.user.name}! Redirecting...`);

            if (session.user.role === "student") router.push("/student-dashboard");
            else if (session.user.role === "admin") router.push("/admin-dashboard");
        } catch (err) {
            toast.dismiss(loadingToast);
            toast.error("Something went wrong. Try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    style: { background: '#6b21a8', color: '#fff', fontWeight: '500' },
                    success: { iconTheme: { primary: '#d8b4fe', secondary: '#fff' } },
                    error: { iconTheme: { primary: '#f87171', secondary: '#fff' } },
                }}
            />
            <Navbar />
            <div className="flex justify-center items-center min-h-[90vh] bg-gradient-to-br from-purple-300 via-purple-200 to-white px-4">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-purple-200 transition-transform transform hover:-translate-y-1 hover:shadow-3xl z-10"
                >
                    <h2 className="text-4xl font-extrabold mb-8 text-center text-purple-800">
                        Sign In
                    </h2>

                    <InputField
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="mb-4"
                    />

                    <InputField
                        label="Password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="mb-6"
                    />

                    <Button
                        type="submit"
                        className={`w-full py-3 text-white font-semibold rounded-lg transition-all ${loading ? "bg-purple-400 cursor-not-allowed" : "bg-purple-700 hover:bg-purple-800"
                            }`}
                        disabled={loading}
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </Button>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        Don’t have an account?{" "}
                        <span
                            onClick={() => router.push("/signup")}
                            className="text-purple-700 hover:text-purple-900 underline cursor-pointer"
                        >
                            Sign Up
                        </span>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginPage;
