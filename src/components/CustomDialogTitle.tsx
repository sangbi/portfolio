import { DialogTitle, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
	title?: string;
	onClose: () => void;
}
export default function CustomDialogTitle(props: Props) {
	const { title, onClose } = props;
	return (
		<DialogTitle sx={{ p: 1 }}>
			<Stack
				direction={"row"}
				alignItems={"center"}
				justifyContent={title ? "space-between" : "flex-end"}>
				{title && <Typography>{title}</Typography>}
				<IconButton onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</Stack>
		</DialogTitle>
	);
}
