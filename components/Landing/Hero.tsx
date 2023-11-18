import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Calendar } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 py-12 md:py-16 lg:py-32 w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto flex-col">
            <div className="flex flex-col gap-6 md:text-center md:items-center lg:text-left lg:items-start lg:justify-center">
                <section className="flex flex-col md:flex-row">
                    <div className="flex flex-col text-center">
                        <Image
                            src={"/assets/google.png"}
                            unoptimized
                            alt="google review"
                            width={100}
                            height={100}
                            className="w-40 h-auto"
                        />
                    </div>
                </section>
                <h1 className="text-3xl !leading-tight font-semibold">
                    Most Loved platform by{" "}
                    <span className="text-teal-500">Students</span>
                    <br />
                    Most Trusted platform by{" "}
                    <span className="text-teal-500">Parents</span>
                </h1>
                <p className="text-slate-500">
                    We understand the significance of education as a
                    transformative force. Our website is your gateway to explore
                    a world of opportunities, where dreams of studying abroad
                    come to life. Whether you&apos;re a student with aspirations
                    or a parent with hopes, our platform is designed to be your
                    trusted guide.
                </p>
                <Button
                    asChild
                    className="bg-teal-500 hover:bg-teal-600 py-6 px-4 md:w-fit"
                >
                    <Link
                        href={"https://calendly.com/fostermind/30min"}
                        target="_blank"
                    >
                        <Calendar
                            className="mr-2"
                            strokeWidth={1.5}
                            size={20}
                        />{" "}
                        Book a free Counselling Session
                    </Link>
                </Button>
            </div>
            <div>
                <video className="w-full h-full" autoPlay muted loop>
                    <source src={"/assets/herovid.mp4"} type="video/mp4" />
                </video>
            </div>
        </section>
    );
};

export default Hero;
