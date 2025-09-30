import TabCustom, { TabType } from "@/components/TabCustom";
import { Container } from "@mui/material";
import DramaTab from "./components/Drama/DramaTab";
import MovieTab from "./components/MovieTab/MovieTab";

export default function ApiConnectionHome() {
	const talValue: TabType[] = [
		{
			label: "movie",
			children: <MovieTab />,
		},
		{
			label: "drama",
			children: <DramaTab />,
		},
	];
	return (
		<Container sx={{ p: 1 }}>
			<TabCustom data={talValue} />
		</Container>
	);
}
