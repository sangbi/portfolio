import SelectTableCell from "@/components/SelectTableCell";
import TextTableCell from "@/components/TextTableCell";
import { GridColumnOptions } from "@/util/grid-util";
import { TableCell, TableRow } from "@mui/material";
type Props<T extends { id: number }> = {
	data: T;
	labelData: Record<keyof T, GridColumnOptions<T>>;
	onChange: <K extends keyof T>(id: number, key: K, value: T[K]) => void;
	hiddenColumns: Set<keyof T>;
	columnKeys: (keyof T)[];
};

export default function CustomTableRow<T extends { id: number }>(
	props: Props<T>
) {
	const { data, labelData, onChange, hiddenColumns, columnKeys } = props;
	const visibleKeys = (columnKeys ?? []).filter((k) => !hiddenColumns?.has(k));

	return (
		<TableRow>
			{visibleKeys.map((key) => {
				const cellKey = String(key);
				if (labelData[key].updateType === "input") {
					return (
						<TextTableCell
							key={cellKey}
							value={data[key] as string | number}
							onChange={(newValue) =>
								onChange(data.id, key, newValue as T[typeof key])
							}
							sx={{ textAlign: labelData[key].align }}
						/>
					);
				} else if (labelData[key].updateType === "select") {
					const align = labelData[key].align ?? "left";
					return (
						<SelectTableCell
							key={cellKey}
							value={data[key] as string | number}
							onChange={(newValue) =>
								onChange(data.id, key, newValue as T[typeof key])
							}
							code={labelData[key].code as string} // ✅ 옵션 연결
							align={align}
							sx={{ textAlign: labelData[key].align }}
						/>
					);
				} else {
					return (
						<TableCell
							key={cellKey}
							sx={{ textAlign: labelData[key].align ?? "center" }}>
							{data[key] as string | number}
						</TableCell>
					);
				}
			})}
		</TableRow>
	);
}
