import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Foster Mind",
    description: "Gateway to explore a world of opportunities",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
