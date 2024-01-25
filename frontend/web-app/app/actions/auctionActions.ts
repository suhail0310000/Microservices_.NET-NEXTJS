import { PagedResult, Auction } from "../types";

export async function getData(pageNumber: number = 1): Promise<PagedResult<Auction>> {
    try {
        const res = await fetch(`http://localhost:7002/api/search?pageSize=4&pageNumber=${pageNumber}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error; // Rethrow the error after logging, or handle it as appropriate
    }
}
