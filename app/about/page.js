import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 px-6 py-12 max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="text-gray-600">
                    This LMS platform is designed to provide students with a seamless learning experience while
                    empowering instructors to manage content effectively.
                </p>
            </main>
            <Footer />
        </div>
    );
}
