// ./nextjs-app/app/[slug]/page.tsx

import { SanityDocument } from "@sanity/client";
import { client } from "@/sanity/lib/client";
import Post from "@/components/Landing/Post";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
    // Important, use the plain Sanity Client here
    const posts = await client.fetch(postPathsQuery);

    return posts;
}

export default async function Page({ params }: { params: any }) {
    const post = await sanityFetch<SanityDocument>({
        query: postQuery,
        params,
    });

    return <Post post={post} />;
}
