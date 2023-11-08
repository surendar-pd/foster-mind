// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug, "mainImage": mainImage.asset->url, "alt": mainImage.alt, description, publishedAt, popularity, body
}`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, "mainImage": mainImage.asset->url, "alt": mainImage.alt, body
}`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
}`;
// Get all countries
export const countriesQuery = groq`*[_type == "country" && defined(slug.current)]{
    _id, title, slug, "mainImage": mainImage.asset->url, "alt": mainImage.alt, body
}`;

// Get a single country by its slug
export const countryQuery = groq`*[_type == "country" && slug.current == $slug][0]{ 
    title, "mainImage": mainImage.asset->url, "alt": mainImage.alt, body
}`;

// Get all country slugs
export const countryPathsQuery = groq`*[_type == "country" && defined(slug.current)][]{
    "params": { "slug": slug.current }
}`;