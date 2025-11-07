import { Drama, fetchPopularDramas, searchDramas } from "@/sub/api/drama";
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
import DramaCard from "./DramaCard";

export default function DramaTab() {
	const [dramas, setDramas] = useState<Drama[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [inputData, setInputData] = useState("");
	const [searchData, setSearchData] = useState<string | undefined>();
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(1);

	const reload = useCallback(
		async (params: { searchData?: string; page: number }) => {
			try {
				setLoading(true);
				const data = params.searchData
					? await searchDramas(params.searchData, params.page)
					: await fetchPopularDramas(params.page);
				setDramas(data.results);
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
		reload({ searchData: searchData, page: page });
	}, [reload, searchData, page]);

	// 검색버튼 클릭
	const handleClickSearchBtn = () => {
		setSearchData(inputData);
		setPage(1);
	};

	const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<Container sx={{ backgroundColor: "#555", p: 1, borderRadius: 2 }}>
			<Stack direction={"row"}>
				<TextField
					type="search"
					size="small"
					value={inputData}
					onChange={(e) => setInputData(e.target.value)}
				/>
				<Button onClick={handleClickSearchBtn}>조회</Button>
			</Stack>
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
							flex: "0 1 calc(50% - 16px)",
							"@media (min-width:900px)": { flex: "0 1 calc(20% - 16px)" },
						}}>
						<DramaCard tv={drama} />
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
