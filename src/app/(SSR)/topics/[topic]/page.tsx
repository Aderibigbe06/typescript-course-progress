import { UnsplashImage } from "@/models/unsplash-image";
import Image from 'next/image';
import styles from "./TopicPage.module.css";
import {Alert} from "@/components/bootstrap"
import { Metadata } from "next";

// export const revalidate = 0;

// export const dynamicParams = false;
interface PageProps {
    params:{topic: string},
    searchParams: {[key: string]: string | string[] | undefined },
}

export function generateMetadata({params: {topic}}: PageProps): Metadata {
    return{
        title: topic + " - Nextjs Image Gallery"
    }
}

export function generateStaticParams() {
    return ["health", "fitness", "coding", "football"].map(topic => ({topic}));
}

export default async function Page({params: {topic} }: PageProps) {

    const response = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)

if (!response.ok) {
    throw new Error('Failed to fetch images');
}

    const images: UnsplashImage[] = await response.json();

    if (!Array.isArray(images)) {
        throw new Error('Fetched data is not an array');
    }

    return(
        <div>
            <Alert>This pages uses <strong>generateStaticParams</strong> to render and cache static pages at build time, even though the URL has a dynamic parameter</Alert>
            <h1>{topic}</h1>
            {
                images.map(image => (
                    <Image
                        src = {image.urls.raw}
                        width = {250}
                        height = {250}
                        alt = {image.urls.raw}
                        key = {image.urls.raw}
                        className = {styles.image}
                    />
                ))
            }
        </div>
    );
}