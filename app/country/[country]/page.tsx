// ./nextjs-app/app/[slug]/page.tsx

import { SanityDocument } from "@sanity/client";
import { client } from "@/sanity/lib/client";
import { countryPathsQuery, countryQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import Country from "@/components/Landing/Country";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
    // Important, use the plain Sanity Client here
    const countries = await client.fetch(countryPathsQuery);
    return countries;
}

export default async function CountryPage({ params }: { params: any }) {
    const country = await sanityFetch<SanityDocument>({
        query: countryQuery,
        params,
    });

    return <Country country={country} />;
}
