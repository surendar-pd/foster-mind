// ./nextjs-app/app/_components/Post.tsx

"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import SanityImage from "./SanityImage";
const builder = imageUrlBuilder(client);

export default function Country({ country }: { country: SanityDocument }) {
    const myPortableTextComponents = {
        types: {
            image: ({ value }: any) => {
                return <SanityImage {...value} />;
            },
        },
    };

    return (
        <main className="md:px-16 py-16 lg:max-w-5xl mx-auto prose prose-h1:text-xl md:prose-h1:text-2xl lg:prose-h1:text-4xl prose-lg p-4">
            {country?.mainImage ? (
                <Image
                    unoptimized
                    className="w-full rounded-lg"
                    src={builder.image(country.mainImage).url()}
                    width={100}
                    height={100}
                    alt={country?.mainImage?.alt}
                />
            ) : null}
            <h1>{country.title}</h1>
            {country?.body ? (
                <PortableText
                    value={country.body}
                    components={myPortableTextComponents}
                />
            ) : null}
        </main>
    );
}
