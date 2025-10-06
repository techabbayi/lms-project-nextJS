import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to the LMS</h1>
        <p className="text-gray-600 mb-6">Learn, grow, and track your progress with our platform.</p>
        <a href="/login" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Get Started
        </a>
      </main>
      <Footer />
    </div>
  );
}
