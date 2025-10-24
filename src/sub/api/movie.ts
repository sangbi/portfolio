export interface Movie {
	id: number;
	title: string;
	overview: string;
	poster_path: string;
	release_date: string;
	vote_average: number;
}

interface MovieResponse {
	results: Movie[];
	total_pages: number;
	total_results: number;
}
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_API_URL;

export async function fetchPopularMovies(page: number): Promise<MovieResponse> {
	const res = await fetch(
		`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`
	);
	if (!res.ok) throw new Error("Failed to fetch popular movies");
	const data = await res.json();
	return {
		results: data.results,
		total_pages: data.total_pages,
		total_results: data.total_results,
	};
}

export async function searchMovies(
	query: string,
	page: number
): Promise<MovieResponse> {
	const res = await fetch(
		`${BASE_URL}/search/movie?api_key=${API_KEY}&language=ko-KR&query=${encodeURIComponent(
			query
		)}&page=${page}`
	);
	if (!res.ok) throw new Error("Failed to search movies");
	const data = await res.json();
	return {
		results: data.results,
		total_pages: data.total_pages,
		total_results: data.total_results,
	};
}

export async function fetchMovieDetail(id: string): Promise<Movie> {
	const res = await fetch(
		`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`
	);
	if (!res.ok) throw new Error("Failed to fetch movie detail");
	return res.json();
}
