import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

export interface TabType {
	label: string;
	children: React.ReactNode;
}
interface Props {
	data: TabType[];
}
export default function TabCustom(props: Props) {
	const { data } = props;
	const [tabValue, setTabValue] = useState<string>(data[0].label);
	return (
		<>
			<Tabs
				textColor="inherit"
				indicatorColor="primary"
				sx={{
					mb: 2,
					"& .MuiTabs-indicator": {
						height: 4,
						borderRadius: 2,
						backgroundColor: "#fff",
					},
					"& .MuiTab-root": {
						textTransform: "none",
						fontWeight: tabValue ? "bold" : "normal",
						color: tabValue ? "#ffffff" : "rgba(255,255,255,0.6)",
					},
				}}
				value={tabValue}
				onChange={(_, vlaue) => setTabValue(vlaue)}>
				{data.map((el) => {
					const { label } = el;
					return <Tab key={label} label={label} value={label} />;
				})}
			</Tabs>
			{data
				.filter((el) => el.label === tabValue)
				.map((el) => {
					return <Box key={el.label}>{el.children}</Box>;
				})}
		</>
	);
}
