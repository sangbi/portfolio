import { Drama, fetchPopularDramas, searchDramas } from "@/sub/api/drama";
import { Box, Container, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import MovieCard from "./DramaCard";

export default function DramaTab() {
	const [dramas, setDramas] = useState<Drama[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const reload = useCallback(
		async (params: { searchData?: string; page: number }) => {
			try {
				setLoading(true);
				const data = params.searchData
					? await searchDramas(params.searchData, params.page)
					: await fetchPopularDramas(params.page);
				setMovies(data.results);
				setTotalPages(data.total_pages);
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError("Unknown error");
				}
			} finally {
				setLoading(false);
			}
		},
		[]
	);
	useEffect(() => {
		fetchPopularDramas()
			.then(setDramas)
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<Container sx={{ p: 1 }}>
			<Typography variant="h4" mb={3}>
				인기 TV
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 1,
				}}>
				{dramas.map((drama) => (
					<Box
						key={drama.id}
						sx={{
							flex: "0 1 calc(50% - 16px)", // 기본: 2열
							"@media (min-width:900px)": { flex: "0 1 calc(20% - 16px)" }, // 5열
						}}>
						<MovieCard tv={drama} />
					</Box>
				))}
			</Box>
		</Container>
	);
}
