import { fetchPopularMovies, Movie, searchMovies } from "@/sub/api/movie";
import {
	Box,
	Button,
	Container,
	Pagination,
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
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(1);

	const reload = useCallback(
		async (params: { searchData?: string; page: number }) => {
			try {
				setLoading(true);
				const data = params.searchData
					? await searchMovies(params.searchData, params.page)
					: await fetchPopularMovies(params.page);
				setMovies(data.results);
				setTotalPages(data.total_pages);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		},
		[]
	);

	useEffect(() => {
		reload({ page: 1 });
	}, []);

	// 검색버튼 클릭
	const handleClickSearchBtn = () => {
		reload({ searchData: searchData, page: page });
		setPage(page);
	};

	const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
		reload({ searchData: searchData, page: page });
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<Container sx={{ backgroundColor: "#555", p: 1, borderRadius: 2 }}>
			<Stack direction={"row"}>
				<TextField
					type="search"
					size="small"
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
			{totalPages > 1 && (
				<Stack alignItems="center" mt={3}>
					<Pagination
						count={totalPages}
						page={page}
						onChange={handlePageChange}
						color="primary"
						shape="rounded"
					/>
				</Stack>
			)}
		</Container>
	);
}
