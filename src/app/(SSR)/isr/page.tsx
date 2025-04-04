import { UnsplashImage } from "@/models/unsplash-image";
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";
import {Alert} from "@/components/bootstrap";

export const metadata: Metadata = {
    title: "Incremental Static Regeneration - nextjs image gallery",
  };

export const revalidate = 15;

export default async function Page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY,
        {
          // next: {revalidate: 0}
        }
    );
    const image: UnsplashImage = await response.json();

    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;

    return(
        <div className = "d-flex flex-column align-items-center">
            <Alert>
                This page uses <strong>incremental static regeneration</strong>.
                A new image is fetched every 15 seconds (after refreshing the page) and then served from the cache for that duration.
            </Alert>

            <Image
                src = {image.urls.raw}
                width = {width}
                height = {height}
                alt = {image.urls.raw}
                className = "rounded shadow mw = 100 h = 100"
                 />
                 by <Link href = {"/users/" + image.user.username}>(image.user.usernames)</Link>

        </div>
    );
}
