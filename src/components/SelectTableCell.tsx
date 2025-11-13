import { jobOptions } from "@/features/GridHome/sample-data";
import { MenuItem, Select, SxProps, TableCell } from "@mui/material";

type Align = "left" | "center" | "right";

type Props<T extends string | number> = {
	value: T;
	onChange: (value: T) => void;
	code: string;
	disabled?: boolean;
	sx?: SxProps;
	align?: Align;
};

export default function SelectTableCell<T extends string | number>({
	value,
	onChange,
	code,
	disabled = false,
	align = "left",
	sx,
}: Props<T>) {
	const selList = code === "40" ? jobOptions : [];

	return (
		<TableCell
			sx={{
				cursor: disabled ? "default" : "pointer",
				p: 0,
				height: "100%",
				overflow: "hidden",
				textAlign: align, // ✅ 글씨 위치만 align 적용
				...(sx ?? {}),
			}}>
			<Select
				value={value}
				onChange={(e) => onChange(e.target.value as T)}
				disabled={disabled}
				fullWidth
				variant="outlined"
				size="small"
				sx={{
					width: "100%",
					height: "100%",
					fontSize: "0.875rem",
					border: "none",
					"& .MuiOutlinedInput-notchedOutline": {
						border: "none", // ✅ 밑줄 제거
					},
					"& .MuiSelect-select": {
						display: "flex",
						alignItems: "center",
						height: "100%",
						padding: "0 8px !important",
						textAlign: align, // ✅ 글씨 위치만 align 적용
					},
				}}>
				{selList.map((opt) => (
					<MenuItem
						key={String(opt)}
						value={opt}
						sx={{
							fontSize: "0.875rem",
							minHeight: "32px",
						}}>
						{opt}
					</MenuItem>
				))}
			</Select>
		</TableCell>
	);
}
