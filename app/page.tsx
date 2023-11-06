import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Calendar } from "lucide-react";
import Hero from "@/components/Landing/Hero";
import WhatWeDo from "@/components/Landing/WhatWeDo";
import About from "@/components/Landing/About";
import Team from "@/components/Landing/Team";
import Map from "@/components/Landing/Map";

export default function Home() {
    return (
        <main className="">
            <Hero />
            <WhatWeDo />
            <About />
            <Team/>
            <Map/>
        </main>
    );
}
