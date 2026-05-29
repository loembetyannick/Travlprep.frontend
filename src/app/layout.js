import "./globals.css";
import "../lib/fontawesome";

export const metadata = {
  title: "Travlprep",
  description: "Travlprep helps spontaneous travellers save ideas, organise trip details, and relive every journey.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
