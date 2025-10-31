export interface Drama {
	id: number;
	title: string;
	overview: string;
	poster_path: string;
	release_date: string;
	vote_average: number;
}

interface DramaResponse {
	results: Drama[];
	total_pages: number;
	total_results: number;
}

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_API_URL;

export async function fetchPopularDramas(page: number): Promise<DramaResponse> {
	const res = await fetch(
		`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`
	);
	if (!res.ok) throw new Error("Failed to fetch popular movies");
	const data = await res.json();
	return {
		results: data.results,
		total_pages: data.total_pages,
		total_results: data.total_results,
	};
}

export async function searchDramas(
	query: string,
	page: number
): Promise<DramaResponse> {
	const res = await fetch(
		`${BASE_URL}/search/tv?api_key=${API_KEY}&language=ko-KR&query=${encodeURIComponent(
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

export async function fetchTvDetail(id: string): Promise<Drama> {
	const res = await fetch(
		`${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=ko-KR`
	);
	if (!res.ok) throw new Error("Failed to fetch movie detail");
	return res.json();
}
