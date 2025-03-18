import { NextResponse } from "next/server";

// Cache settings (2 minutes)
const CACHE_DURATION = 120 * 1000;
const cachedData: Record<string, unknown> = {};
const lastFetchedTime: Record<string, number> = {};

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";
    const perPage = 10;

    const currentTime = Date.now();

    // Serve cached data if available
    if (cachedData[page] && currentTime - lastFetchedTime[page] < CACHE_DURATION) {
        console.log(` Serving cached data for page ${page}`);
        return NextResponse.json(cachedData[page]);
    }

    try {
        console.log(` Fetching fresh data from CoinGecko for page ${page}`);

        const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=true&price_change_percentage=24h`,
            {
                headers: { Accept: "application/json" },
                next: { revalidate: 120 }, // Cache response for 2 minutes
            }
        );

        if (response.status === 429) {
            console.warn(" Rate limit exceeded. Returning last cached data.");
            return cachedData[page]
                ? NextResponse.json(cachedData[page]) // Use last good cache
                : NextResponse.json({ error: "Rate limit exceeded. Try again later." }, { status: 429 });
        }

        if (!response.ok) {
            throw new Error(`API returned status ${response.status}`);
        }

        const data = await response.json();

        // Store data in cache
        cachedData[page] = data;
        lastFetchedTime[page] = currentTime;

        return NextResponse.json(data);
    } catch (error) {
        console.error(" Failed to fetch cryptocurrency data:", error);
        return cachedData[page]
            ? NextResponse.json(cachedData[page]) // Use last good cache
            : NextResponse.json({ error: "Failed to fetch data. Try again later." }, { status: 500 });
    }
}
