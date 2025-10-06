
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import DashboardPage from "../components/pages/dashboard-page";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function AdminDashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session || session.user?.role !== "admin") {
        redirect("/signin");
    }

    console.log("✅ Admin session:", session.user); // submission requirement

    return <DashboardPage />;
}
