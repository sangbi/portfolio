import { IconButton, TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
interface Props {
	data: string;
}
export default function TodoListTableRow(props: Props) {
	const { data } = props;
	return (
		<TableRow>
			<TableCell sx={{ width: "100%" }}>{data}</TableCell>
			<TableCell sx={{ minWidth: 100, py: 0 }}>
				<IconButton size="small">
					<EditIcon />
				</IconButton>
				<IconButton size="small">
					<DeleteIcon />
				</IconButton>
			</TableCell>
		</TableRow>
	);
}
