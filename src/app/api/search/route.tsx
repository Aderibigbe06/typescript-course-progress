import { NextResponse } from "next/server";
import { UnsplashSearchResponse } from "@/models/unsplash-image";

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const query = searchParams.get("query");

    if (!query) {
        return NextResponse.json({error: "No query provided"}, {status: 400})
    }

    const response = await fetch(`https://api.unsplash.com/seach/photos?query=${query}&client=${process.env.UNSPLASH_ACESS_KEY}`);
    const {results}: UnsplashSearchResponse = await response.json();

    return NextResponse.json(results);
}
