"use server";

import qs from "query-string"

const BASE_URL = process.env.COINGECKO_BASE_URL;
const API_KEY = process.env.COINGECKO_API_KEY;

if (!BASE_URL || !API_KEY) {
    throw new Error("Missing CoinGecko API credentials");
};

export async function fetcher<T>(
    endpoint: string,
    param?: QueryParams,
    revalidate = 60,

): Promise<T> {
    const baseUrl = BASE_URL.replace(/\/$/, "");
    const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;

    const url = qs.stringifyUrl({
        url: `${baseUrl}${cleanEndpoint}`,
        query: param,
    }, {
        skipEmptyString: true,
        skipNull: true,
    });

    const isPro = baseUrl.includes("pro-api.coingecko.com");
    const headerKey = isPro ? "x-cg-pro-api-key" : "x-cg-demo-api-key";

    const response = await fetch(url, {
        headers: {
            [headerKey]: API_KEY,
            "Content-Type": "application/json",
        },
        next: {
            revalidate,
        },
    });

    if (!response.ok) {
        const errorBody: CoinGeckoErrorBody = await response.json().catch(() => ({}));
        throw new Error(`API Error: ${response.status}: ${errorBody.error || response.statusText}`);
    }

    return response.json();
}

