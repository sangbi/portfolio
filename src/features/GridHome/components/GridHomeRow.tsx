import { TableCell, TableRow } from "@mui/material";
import { GridSampleData } from "../sample-data";
import { GridColumnOptions, gridRowDataMap } from "@/util/grid-util";
import TextTableCell from "@/components/TextTableCell";

type Props = {
	data: GridSampleData;
	labelData: Record<keyof GridSampleData, GridColumnOptions<GridSampleData>>;
	onChange: <K extends keyof GridSampleData>(
		id: number,
		key: K,
		value: GridSampleData[K]
	) => void;
};
export default function GridHomeRow(props: Props) {
	const { data, labelData, onChange } = props;

	return (
		<TableRow>
			{gridRowDataMap(labelData).map((key) => {
				if (key === "name") {
					return (
						<TextTableCell
							key={key}
							value={data[key]}
							onChange={(newValue) => onChange(data.id, key, newValue)}
							sx={{ textAlign: labelData[key].align }}
						/>
					);
				} else {
					return (
						<TableCell sx={{ textAlign: labelData[key].align }} key={key}>
							{data[key]}
						</TableCell>
					);
				}
			})}
		</TableRow>
	);
}
