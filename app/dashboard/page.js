import DashboardLayout from "../components/layouts/DashboardLayout";

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p className="text-gray-600">Welcome to your dashboard! Explore your courses and track progress here.</p>
        </DashboardLayout>
    );
}
