import { TableCell, TableRow } from "@mui/material";
import { GridColumnOptions, gridRowDataMap } from "@/util/grid-util";
import TextTableCell from "@/components/TextTableCell";
type Props<T extends { id: number }> = {
	data: T;
	labelData: Record<keyof T, GridColumnOptions<T>>;
	onChange: <K extends keyof T>(id: number, key: K, value: T[K]) => void;
	hiddenColumns: Set<keyof T>;
};

export default function CustomTableRow<T extends { id: number }>(
	props: Props<T>
) {
	const { data, labelData, onChange, hiddenColumns } = props;
	const visibleKeys = gridRowDataMap(labelData).filter(
		(key) => !hiddenColumns.has(key)
	);

	return (
		<TableRow>
			{visibleKeys.map((key) => {
				const cellKey = String(key);
				if (labelData[key].updateYn) {
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
