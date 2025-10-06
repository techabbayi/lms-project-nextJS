import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 px-6 py-12 max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-600 mb-6">
                    Have questions? Reach out via email at <a href="mailto:support@lms.com" className="text-blue-600 underline">support@lms.com</a>.
                </p>
            </main>
            <Footer />
        </div>
    );
}
