import { Key } from "react";

export interface UnsplashImage {
    id: Key | null | undefined;
    description: string,
    user: {
        username: string,
    },
    urls: {
        raw: string,
    },
    width: number,
    height: number,
}

export interface UnsplashSearchResponse {
    results: UnsplashImage[],
}