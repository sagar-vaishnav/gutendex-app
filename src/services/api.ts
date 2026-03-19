const BASE_URL = "https://gutendex.com/books";
import type { Book } from "../types/book";

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
}

export const fetchBooks = async (
  url?: string,
  params?: Record<string, string>,
): Promise<ApiResponse | null> => {
  try {
    let finalUrl = url;

    if (!finalUrl && params) {
      const query = new URLSearchParams(params).toString();
      finalUrl = `${BASE_URL}?${query}`;
    }

    const res = await fetch(finalUrl!);

    if (!res.ok) throw new Error("API error");

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
