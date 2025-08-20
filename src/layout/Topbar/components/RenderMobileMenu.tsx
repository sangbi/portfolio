import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MenuItem as MenuType } from "@/router/menu";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";

interface Props {
	items: MenuType[];
	drawerOpen: boolean;
	onDrawerOpen: (value: boolean) => void;
}
export default function RenderMobileMenu(props: Props) {
	const { items, drawerOpen, onDrawerOpen } = props;
	return (
		<Drawer
			anchor="right"
			open={drawerOpen}
			onClose={() => onDrawerOpen(false)}>
			<List sx={{ width: 250 }}>
				{items.map((item) =>
					item.children ? (
						<Accordion key={item.label} disableGutters>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								{item.label}
							</AccordionSummary>
							<AccordionDetails>
								{item.children.map((child) => (
									<ListItem key={child.label} disablePadding>
										<ListItemButton component="a" href={child.href}>
											<ListItemText primary={child.label} />
										</ListItemButton>
									</ListItem>
								))}
							</AccordionDetails>
						</Accordion>
					) : (
						<ListItem key={item.label} disablePadding>
							<ListItemButton component="a" href={item.href}>
								<ListItemText primary={item.label} />
							</ListItemButton>
						</ListItem>
					)
				)}
			</List>
		</Drawer>
	);
}
