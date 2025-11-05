import { Box, SxProps, TableCell, TextField } from "@mui/material";
import { useState } from "react";

type Props<T extends string | number> = {
	value: T;
	onChange: (value: T) => void;
	disabled?: boolean;
	sx?: SxProps;
};
export default function TextTableCell<T extends string | number>({
	value,
	onChange,
	disabled = false,
	sx,
}: Props<T>) {
	const [editing, setEditing] = useState(false);
	const [tempValue, setTempValue] = useState<T>(value);

	const startEdit = () => {
		if (!disabled) {
			setEditing(true);
		}
	};

	const finishEdit = () => {
		setEditing(false);
		onChange(tempValue);
	};

	return (
		<TableCell
			onClick={startEdit}
			sx={{
				cursor: disabled ? "default" : "pointer",
				p: 0,
				height: "100%",
				overflow: "hidden", // ✅ TextField 튀어 나가는 현상 방지
				...(sx || {}),
			}}>
			{editing ? (
				<TextField
					value={tempValue}
					onChange={(e) => setTempValue(e.target.value as T)}
					onBlur={finishEdit}
					onKeyDown={(e) => e.key === "Enter" && finishEdit()}
					fullWidth
					size="small"
					variant="standard"
					autoFocus
					InputProps={{
						disableUnderline: true,
						sx: {
							px: 1,
							py: 1,
							fontSize: "inherit",
							lineHeight: "normal", // ✅ Table 셀과 동일한 line-height 적용
							height: "100%", // ✅ 셀 높이 넘지 않게
							minHeight: "unset", // ✅ TextField 기본 최소 높이 제거
						},
					}}
					inputProps={{
						style: {
							padding: 0, // ✅ input 자체 padding 제거
							margin: 0,
						},
					}}
				/>
			) : (
				<Box sx={{ px: 1, py: 1 }}>{value}</Box>
			)}
		</TableCell>
	);
}
