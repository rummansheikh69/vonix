import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zylo — Digital Branding & Web Systems",
  description: "Digital branding & web systems for online businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interSans.className}  bg-black text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
