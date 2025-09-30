import { fetchPopularMovies, Movie, searchMovies } from "@/sub/api/movie";
import {
	Box,
	Button,
	Container,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieTab() {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [searchData, setSearchData] = useState("");

	useEffect(() => {
		fetchPopularMovies()
			.then(setMovies)
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, []);

	// 목록 조회 API
	const reload = useCallback(async () => {
		setLoading(true);
		await fetchPopularMovies()
			.then(setMovies)
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, []);

	// 검색 API
	const onSearch = useCallback(async (search: string) => {
		setLoading(true);
		searchMovies(search)
			.then(setMovies)
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, []);

	// 검색버튼 클릭
	const handleClickSearchBtn = () => {
		if (searchData === "") {
			reload();
		} else {
			onSearch(searchData);
		}
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<Container sx={{ backgroundColor: "#555", p: 1, borderRadius: 2 }}>
			<Stack direction={"row"}>
				<TextField
					type="search"
					value={searchData}
					onChange={(e) => setSearchData(e.target.value)}
				/>
				<Button onClick={handleClickSearchBtn}>조회</Button>
			</Stack>
			<Typography variant="h4" mb={3}>
				인기 영화
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 1,
				}}>
				{movies.map((movie) => (
					<Box
						key={movie.id}
						sx={{
							flex: "0 1 calc(50% - 16px)",
							"@media (min-width:900px)": { flex: "0 1 calc(20% - 16px)" },
							minWidth: 0,
						}}>
						<MovieCard movie={movie} />
					</Box>
				))}
			</Box>
		</Container>
	);
}
