"use client";
import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { NAV_MENU_DATA } from "@/constants/NavMenuData";
import { Button } from "./ui/button";
import Link from "next/link";

const Sidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <HamburgerMenuIcon fontSize={24} className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side={"top"}>
                <SheetHeader>
                    <SheetTitle>
                        <h1 className="text-2xl font-medium">
                            Foster<span className="text-blue-400">Mind</span>
                        </h1>
                    </SheetTitle>
                    <SheetDescription>
                        <section className="flex flex-col items-center gap-4">
                            {NAV_MENU_DATA.map((data, idx) => (
                                <Button variant={"ghost"} key={idx} asChild>
                                    <Link href={data.href}>{data.title}</Link>
                                </Button>
                            ))}
                            <Button className="bg-blue-500 w-fit hover:bg-blue-600 py-6 px-4">
                                Book Session
                            </Button>
                        </section>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default Sidebar;
