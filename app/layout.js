import connectToDatabase from "./utils/mongodb";
import User from "./models/User";
import "./globals.css";

export default async function RootLayout({ children }) {
  // Connect to MongoDB
  await connectToDatabase();

  console.log("✅ User model loaded successfully:", !!User);

  return (
    <html lang="en">
      <body className="bg-purple-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
