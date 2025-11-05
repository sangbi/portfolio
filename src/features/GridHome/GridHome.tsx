"use client";
import { gridRowDataMap } from "@/util/grid-util";
import {
	Box,
	Button,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { useState } from "react";
import GridHomeRow from "./components/GridHomeRow";
import {
	gridColumnLabels,
	GridSampleData,
	sampleGridData,
} from "./sample-data";

export default function GridHome() {
	const [gridDatas, setGridDatas] = useState<GridSampleData[]>(sampleGridData);

	const handleChange = (
		id: number,
		key: keyof GridSampleData,
		value: string | number
	) => {
		setGridDatas((prev) =>
			prev.map((item) => (item.id === id ? { ...item, [key]: value } : item))
		);
	};

	return (
		<Stack alignItems="center" justifyContent="center" spacing={1}>
			<Paper
				sx={{
					py: 1,
					px: 2,
					maxWidth: 1400,
					width: "100%",
					borderRadius: "7px",
				}}>
				<Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
					Grid
				</Typography>
				- Mui 라이브러리를 활용하여 제작한 커스텀 그리드
				<br />
				※ 모바일로 보는 경우 화면이 작아 레이아웃이 짤려 전체적으로 보기 불편할
				수 있습니다.
				<br />
				데스크탑으로 보시길 지향합니다.
			</Paper>
			<Paper sx={{ p: 1, borderRadius: 2, width: "100%" }}>
				<Box>
					<Button variant="contained" size="large">
						그리드 생성하기
					</Button>
					<TableContainer sx={{ whiteSpace: "nowrap" }}>
						<Table
							sx={{ "& .MuiTableCell-root": { border: "1px solid #e0e0e0" } }}>
							<TableHead>
								<TableRow>
									{gridRowDataMap(gridColumnLabels).map((key) => (
										<TableCell
											key={key}
											sx={{
												width: gridColumnLabels[key].width,
												textAlign: "center",
											}}>
											{gridColumnLabels[key].label}
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{gridDatas.map((el) => (
									<GridHomeRow
										key={el.id}
										data={el}
										labelData={gridColumnLabels}
										onChange={handleChange}
									/>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Paper>
		</Stack>
	);
}
