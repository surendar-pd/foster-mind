import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Calendar } from "lucide-react";

const Hero = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 py-12 md:py-16 lg:py-32 w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto flex-col">
            <div className="flex flex-col gap-6 md:text-center md:items-center lg:text-left lg:items-start lg:justify-center">
                <section className="flex flex-col md:flex-row">
                    <h1>Google img</h1>
                    <h1>Linkedin img</h1>
                </section>
                <h1 className="text-3xl md:text-4xl lg:text-5xl !leading-tight font-semibold">
                    Most Loved platform by{" "}
                    <span className="text-blue-500">Students</span>. Most
                    Trusted platform by{" "}
                    <span className="text-blue-500">Parents</span>.
                </h1>
                <p className="text-slate-500">
                    We understand the significance of education as a
                    transformative force. Our website is your gateway to explore
                    a world of opportunities, where dreams of studying abroad
                    come to life. Whether you&apos;re a student with aspirations
                    or a parent with hopes, our platform is designed to be your
                    trusted guide.
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 py-6 px-4 md:w-fit">
                    <Calendar className="mr-2" strokeWidth={1.5} size={20} />{" "}
                    Book a free Counselling Session
                </Button>
            </div>
            <div>
                <Image
                    src="https://i.pinimg.com/originals/5e/64/c4/5e64c4917fd67c71a4a93820cddee7a8.gif"
                    alt="gif"
                    width={100}
                    height={100}
                    className="w-full rounded-md"
                />
            </div>
        </section>
    );
};

export default Hero;
