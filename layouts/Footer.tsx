import {
    GitHubLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { NAV_MENU_DATA, COUNTRIES } from "@/constants/NavMenuData";
import { FacebookIcon } from "lucide-react";

const Footer = () => {
    return (
        <div
            id="contact"
            className="w-full h-full bg-teal-400 text-slate-800 p-4 md:px-16 md:pt-16 lg:"
        >
            <div className="lg:flex w-full justify-between">
                <div className="mb-8 flex flex-col gap-4">
                    <h1 className="font-semibold text-2xl">
                        Foster<span className="text-secondary"> Mind</span>
                    </h1>
                    <div className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 "
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                        </svg>
                        <p className=" text-sm">
                            903, Ten Square, Jiva Mahalaya Marg, Andheri East,
                            Mumbai - 400069
                        </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link
                            target="_blank"
                            href={"https://instagram.com/fostermind_academy"}
                        >
                            <InstagramLogoIcon
                                width={20}
                                height={20}
                                strokeWidth={1.5}
                                className="hover:text-secondary transition-all duration-300"
                            />
                        </Link>
                        <Link
                            target="_blank"
                            href={"https://www.facebook.com/fostermindacademy"}
                        >
                            <FacebookIcon
                                width={20}
                                height={20}
                                strokeWidth={1.5}
                                className="hover:text-secondary transition-all duration-300"
                            />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                    <div className="">
                        <h1 className="font-medium mb-2">Information</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 ">
                            {NAV_MENU_DATA.map((data, idx) => (
                                <Button key={idx} asChild variant="link">
                                    <Link
                                        href={data.href}
                                        className="text-slate-800 !p-0 w-fit"
                                    >
                                        {data.title}
                                    </Link>
                                </Button>
                            ))}
                            {COUNTRIES.map((data, idx) => (
                                <Button key={idx} asChild variant="link">
                                    <Link
                                        href={data.href}
                                        className="text-slate-800 !p-0 w-fit"
                                    >
                                        {data.title}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <h1 className="font-medium mb-2">Contact</h1>
                        <div className="flex flex-col">
                            <Link href="tel:+919820377327">
                                <Button
                                    variant="link"
                                    className="text-slate-800 !p-0 w-fit"
                                >
                                    +91 9820377327
                                </Button>
                            </Link>
                            <Link href="mailto:hello@fostermindacademy.com">
                                <Button
                                    variant="link"
                                    className="text-slate-800 !p-0 w-fit"
                                >
                                    hello@fostermindacademy.com
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4 flex flex-col lg:flex-row lg:gap-4 items-center mt-2 border-t border-slate-800">
                <p className="text-xs py-2 lg:mt-[1px]">
                    Copyright &copy; {new Date().getFullYear()} FosterMind
                </p>
            </div>
        </div>
    );
};

export default Footer;
