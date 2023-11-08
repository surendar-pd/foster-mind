// ./nextjs-app/app/_components/Posts.tsx
import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
const builder = imageUrlBuilder(client);

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
    return (
        <>
            <section className="bg-white py-8 md:py-16 lg:py-32 p-4 md:px-16 lg:max-w-7xl lg:mx-auto font-bold w-full h-full">
                <h1 className="text-2xl md:text-4xl font-medium mb-12">
                    Latest Updates
                </h1>
                <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
                    {posts.map((post) => (
                        <Link
                            href={post.slug.current}
                            className="w-full hover:-translate-y-1 z-0 h-[28rem] transition-all duration-300 flex flex-col gap-4"
                            key={post._id}
                        >
                            <div className="w-full h-1/2 overflow-hidden">
                                <Image
                                    unoptimized
                                    className="w-full h-full object-cover rounded-lg"
                                    src={builder.image(post.mainImage).url()}
                                    width={300}
                                    height={300}
                                    alt={post?.mainImage?.alt}
                                />
                            </div>
                            <div className="h-1/2 flex flex-col gap-2">
                                <div className="flex items-center text-sm font-medium gap-2">
                                    {/* <p className="text-[#0b72ff]">
                                        Productivity
                                    </p> */}
                                    <p className="text-[#33383f]">
                                        {new Intl.DateTimeFormat("en-IN", {
                                            dateStyle: "long",
                                            timeZone: "Asia/Kolkata",
                                        }).format(new Date(post.publishedAt))}
                                    </p>
                                </div>
                                <h1 className="text-xl font-medium">
                                    {post.title}
                                </h1>
                                <p className="text-sm font-medium text-slate-500">
                                    {post.description.slice(0, 120) + `...`}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
