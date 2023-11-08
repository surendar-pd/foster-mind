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
import { countriesQuery, postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Countries from "@/components/Landing/Countries";
import Compe from "@/components/Landing/Compe";
import Why from "@/components/Landing/Why";

export default async function Home() {
    const posts = await sanityFetch<SanityDocument[]>({
        query: postsQuery,
    });
    const countries = await sanityFetch<SanityDocument[]>({
        query: countriesQuery,
    });

    return (
        <main className="">
            <Hero />
            <About />
            <WhatWeDo />
            <Posts posts={posts} />
            <Countries countries={countries} />
            <Compe/>
            <Why/>
            <Team />
            <Map />
        </main>
    );
}
