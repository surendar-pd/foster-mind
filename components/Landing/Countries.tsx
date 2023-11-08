import Link from "next/link";
import React from "react";
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
const builder = imageUrlBuilder(client);

const Countries = ({ countries = [] }: { countries: SanityDocument[] }) => {
    return (
        <main className="pb-8 md:pb-16 lg:pb-32 w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto flex flex-col gap-4">
            <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
                    Study Destinations
                </h1>
                <p className="text-slate-500 my-4">
                    We work with a wide range of universities and colleges in
                    the following countries:
                </p>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                {countries.map((country) => {
                    console.log(builder.image(country.mainImage).url(), "kkkk");
                    return (
                        <div
                            style={{
                                backgroundImage: `url(${builder
                                    .image(country.mainImage)
                                    .url()})`,
                            }}
                            className={`w-full group bg-no-repeat hover:bg-black/50 bg-cover bg-center aspect-video rounded-md`}
                            key={country._id}
                        >
                            <Link
                                className="bg-black/50 rounded-md p-8 lg:opacity-0 transition-all duration-300 lg:group-hover:opacity-100 w-full h-full flex justify-center items-center"
                                href={`${country.slug.current}`}
                            >
                                <h1 className="text-white text-2xl">
                                    {country.title}
                                </h1>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Countries;
