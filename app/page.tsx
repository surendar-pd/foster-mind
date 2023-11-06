import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Calendar } from "lucide-react";
import Hero from "@/components/Landing/Hero";
import WhatWeDo from "@/components/Landing/WhatWeDo";
import About from "@/components/Landing/About";
import Team from "@/components/Landing/Team";
import Map from "@/components/Landing/Map";
import Posts from "@/components/Landing/Posts";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

export default async function Home() {
    const posts = await sanityFetch<SanityDocument[]>({
        query: postsQuery,
    });

    return (
        <main className="">
            <Hero />
            <WhatWeDo />
            <About />
            <Team />
            <Map />
            <Posts posts={posts} />
        </main>
    );
}
