import { UnsplashImage } from "@/models/unsplash-image";
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";
import {Alert} from "@/components/bootstrap";

export const metadata: Metadata = {
    title: "Static fetching - nextjs image gallery",
  };

export default async function Page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY);
    const image: UnsplashImage = await response.json();

    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;

    return(
        <div className = "d-flex flex-column align-items-center">
            <Alert>
                This page <strong>fetches and catches data at build time.</strong>
                Even though the Unsplash APIs always returns a new image, we see the same image after refreshing the page until we complete the project again
            </Alert>
            
            <Image
                src = {image.urls.raw}
                width = {width}
                height = {height}
                alt = {image.description}
                className = "rounded shadow mw = 100 h = 100"
                 />
                 by <Link href = {"/users/" + image.user.username}>(image.user.usernames)</Link>

        </div>
    )
}