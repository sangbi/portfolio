import {
	Dialog,
	DialogActions,
	DialogContent,
	Divider,
	SxProps,
	Theme,
} from "@mui/material";
import CustomDialogTitle from "./CustomDialogTitle";

type Header = {
	title?: string;
	onClose: () => void;
};
type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface Props {
	sx?: SxProps<Theme>;
	dialogClassName?: string;
	headerClassName?: string;
	contentClassName?: string;
	footerClassName?: string;
	open: boolean;
	size?: Size;
	header?: Header;
	content: React.ReactNode;
	footer?: React.ReactNode;
}

export default function CustomDialog(props: Props) {
	const {
		sx,
		dialogClassName,
		headerClassName,
		contentClassName,
		footerClassName,
		open,
		size,
		header,
		content,
		footer,
	} = props;

	return (
		<Dialog
			open={open}
			fullWidth
			maxWidth={size}
			sx={sx}
			className={dialogClassName}>
			{header && (
				<>
					<CustomDialogTitle
						className={headerClassName}
						title={header.title}
						onClose={header.onClose}
					/>
					<Divider />
				</>
			)}
			<DialogContent
				className={contentClassName}
				sx={{
					p: 2,
					overflowY: "auto",
					px: 2,
					"&::-webkit-scrollbar": {
						width: "8px",
					},
					"&::-webkit-scrollbar-thumb": {
						backgroundColor: "#888",
						borderRadius: "4px",
					},
					"&::-webkit-scrollbar-thumb:hover": {
						backgroundColor: "#555",
					},
					"&::-webkit-scrollbar-track": {
						backgroundColor: "transparent",
					},
				}}>
				{content}
			</DialogContent>
			{footer && (
				<>
					<Divider />
					<DialogActions className={footerClassName}>{footer}</DialogActions>
				</>
			)}
		</Dialog>
	);
}
