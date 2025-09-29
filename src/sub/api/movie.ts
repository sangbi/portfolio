export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_API_URL;

export async function fetchPopularMovies(): Promise<Movie[]> {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
  );
  if (!res.ok) throw new Error("Failed to fetch popular movies");
  const data = await res.json();
  return data.results;
}

export async function searchMovies(query: string): Promise<Movie[]> {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ko-KR&query=${encodeURIComponent(
      query
    )}&page=1`
  );
  if (!res.ok) throw new Error("Failed to search movies");
  const data = await res.json();
  return data.results;
}

export async function fetchMovieDetail(id: string): Promise<Movie> {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`
  );
  if (!res.ok) throw new Error("Failed to fetch movie detail");
  return res.json();
}
