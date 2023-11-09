"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import { NAV_MENU_DATA, COUNTRIES } from "@/constants/NavMenuData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
    const pathname = usePathname();
    return (
        <main
            className={`${
                pathname === "/studio" ? "hidden" : "block"
            } w-full h-full bg-white sticky top-0 z-50`}
        >
            <nav className="p-4 md:p-6 bg-white md:px-16 lg:max-w-7xl lg:mx-auto flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-medium">
                        {/* Foster<span className="text-teal-500">Mind</span> */}
                        <Image
                            unoptimized
                            src={"/assets/logo.png"}
                            alt="logo"
                            width={100}
                            height={100}
                            className="w-28 h-auto"
                        />
                    </h1>
                </div>
                <div className="hidden lg:flex lg:gap-4 lg:items-center">
                    {NAV_MENU_DATA.map((data, idx) => (
                        <Button
                            className="p-4"
                            variant={"ghost"}
                            key={idx}
                            asChild
                        >
                            <Link href={data.href}>{data.title}</Link>
                        </Button>
                    ))}
                    {COUNTRIES.map((data, idx) => (
                        <Button
                            className="p-4"
                            variant={"ghost"}
                            key={idx}
                            asChild
                        >
                            <Link href={data.href}>{data.title}</Link>
                        </Button>
                    ))}
                    <Button className="bg-teal-500 hover:bg-teal-600 p-4">
                        Book Session
                    </Button>
                </div>
                <div className="lg:hidden">
                    <Sidebar />
                </div>
            </nav>
        </main>
    );
};

export default Header;
