import { DialogTitle, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
	title?: string;
	onClose: () => void;
	className?: string;
}
export default function CustomDialogTitle(props: Props) {
	const { title, onClose, className } = props;
	return (
		<DialogTitle className={className} sx={{ py: 1, px: 2 }}>
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
