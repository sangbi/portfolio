import { Dialog, DialogActions, DialogContent, Divider } from "@mui/material";
import CustomDialogTitle from "./CustomDialogTitle";
type Header = {
	title?: string;
	onClose: () => void;
};
type Size = "xs" | "sm" | "md" | "lg" | "xl";
interface Props {
	open: boolean;
	size?: Size;
	header?: Header;
	content: React.ReactNode;
	footer?: React.ReactNode;
}
export default function CustomDialog(props: Props) {
	const { open, size, header, content, footer } = props;
	return (
		<Dialog open={open} fullWidth maxWidth={size}>
			{header && (
				<>
					<CustomDialogTitle title={header.title} onClose={header.onClose} />
					<Divider />
				</>
			)}
			<DialogContent sx={{ p: 2 }}>{content}</DialogContent>
			{footer && (
				<>
					<Divider />
					<DialogActions>{footer}</DialogActions>
				</>
			)}
		</Dialog>
	);
}
