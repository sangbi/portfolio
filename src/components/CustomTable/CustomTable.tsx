import FilterListIcon from "@mui/icons-material/FilterList";
import { GridColumnOptions, gridRowDataMap } from "@/util/grid-util";
import {
	IconButton,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import CustomTableRow from "./components/CustomTableRow";
import clsx from "clsx";
import { useState } from "react";
import ColumnSettingPopover from "./components/ColumnFilterPopover";

type Props<T extends { id: number }> = {
	className?: string;
	columnLabel: Record<keyof T, GridColumnOptions<T>>;
	data: T[];
	onChange: <K extends keyof T>(id: number, key: K, value: T[K]) => void;
	filterMode?: boolean;
};

export default function CustomTable<T extends { id: number }>(props: Props<T>) {
	const { className, columnLabel, data, onChange, filterMode = false } = props;
	const [columnKeys, setColumnKeys] = useState<(keyof T)[]>(
		gridRowDataMap(columnLabel)
	);
	const [hiddenColumns, setHiddenColumns] = useState<Set<keyof T>>(new Set());

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	// ✅ 팝오버 열기 함수 추가
	const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<Stack className={clsx("CustomTable-root", className)}>
			<Stack justifyContent={"flex-end"} direction={"row"}>
				{filterMode && (
					<>
						<IconButton onClick={handleOpenPopover}>
							<FilterListIcon />
						</IconButton>
					</>
				)}
				<ColumnSettingPopover<T>
					open={open}
					anchorEl={anchorEl}
					onClose={() => setAnchorEl(null)}
					columnKeys={columnKeys}
					setColumnKeys={setColumnKeys}
					hiddenColumns={hiddenColumns}
					setHiddenColumns={setHiddenColumns}
					columnLabel={columnLabel}
				/>
			</Stack>
			<TableContainer sx={{ whiteSpace: "nowrap" }}>
				<Table sx={{ "& .MuiTableCell-root": { border: "1px solid #e0e0e0" } }}>
					<TableHead>
						<TableRow>
							{columnKeys
								.filter((key) => !hiddenColumns.has(key))
								.map((key) => (
									<TableCell
										key={String(key)}
										sx={{
											width: columnLabel[key].width,
											textAlign: "center",
										}}>
										{columnLabel[key].label}
									</TableCell>
								))}
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((el) => (
							<CustomTableRow
								key={el.id}
								data={el}
								labelData={columnLabel}
								onChange={onChange}
								hiddenColumns={hiddenColumns}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Stack>
	);
}
