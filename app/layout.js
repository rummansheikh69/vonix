import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vonix — Digital Systems Branding & Automation for Online Businesses",
  description: "Digital branding & web systems for online businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interSans.className}   bg-[radial-gradient(350px_350px_at_top_left,#080808,transparent)] text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
