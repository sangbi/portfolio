"use client";
import CustomTable from "@/components/CustomTable";
import { Box, Checkbox, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import {
	gridColumnLabels,
	GridSampleData,
	sampleGridData,
} from "./sample-data";

export default function GridHome() {
	const [gridDatas, setGridDatas] = useState<GridSampleData[]>(sampleGridData);
	const [filterChecked, setFilterChecked] = useState(false);
	const [columnFilterChecked, setColumnFilterChecked] = useState(false);

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
					<Box
						sx={{
							border: "1px solid #e0e0e0",
							borderRadius: "7px",
							mb: 3,
							p: 1,
						}}>
						<Typography>※그리드 기능</Typography>
						<Stack direction={"row"} flexWrap="wrap">
							<Stack direction={"row"} alignItems={"center"}>
								<Checkbox
									color="info"
									size="small"
									checked={filterChecked}
									onChange={() => setFilterChecked((p) => !p)}
								/>
								<Typography>filter(Drag&Drop)</Typography>
							</Stack>
							<Stack direction={"row"} alignItems={"center"}>
								<Checkbox
									color="info"
									size="small"
									checked={columnFilterChecked}
									onChange={() => setColumnFilterChecked((p) => !p)}
								/>
								<Typography>columnFilter</Typography>
							</Stack>
						</Stack>
					</Box>
					<CustomTable
						data={gridDatas}
						columnLabel={gridColumnLabels}
						onChange={handleChange}
						filterMode={filterChecked}
					/>
				</Box>
			</Paper>
		</Stack>
	);
}
