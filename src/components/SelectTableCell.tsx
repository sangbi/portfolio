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

	const justifyMap: Record<Align, string> = {
		left: "flex-start",
		center: "center",
		right: "flex-end",
	};
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
					boxSizing: "border-box", // ✅ 셀 높이 일관성 유지
					lineHeight: "normal", // ✅ 텍스트 세로 폭 안정화
					"& .MuiOutlinedInput-notchedOutline": {
						border: "none", // ✅ 밑줄 제거
					},
					"& .MuiSelect-select": {
						display: "flex",
						alignItems: "center",
						height: "100%",
						pr: align === "right" ? 4 : 0, // padding-left/right: theme spacing 단위
						justifyContent: justifyMap[align], // ✅ 핵심
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
