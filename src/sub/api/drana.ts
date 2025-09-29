export interface Tv {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_API_URL;

export async function fetchPopularTvs(): Promise<Tv[]> {
  const res = await fetch(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=ko-KR&page=1`
  );
  if (!res.ok) throw new Error("Failed to fetch popular movies");
  const data = await res.json();
  return data.results;
}

export async function searchTvs(query: string): Promise<Tv[]> {
  const res = await fetch(
    `${BASE_URL}/search/tv?api_key=${API_KEY}&language=ko-KR&query=${encodeURIComponent(
      query
    )}&page=1`
  );
  if (!res.ok) throw new Error("Failed to search movies");
  const data = await res.json();
  return data.results;
}

export async function fetchTvDetail(id: string): Promise<Tv> {
  const res = await fetch(
    `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=ko-KR`
  );
  if (!res.ok) throw new Error("Failed to fetch movie detail");
  return res.json();
}
