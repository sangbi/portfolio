import { MenuItem as MenuType } from "@/router/menu";
import { Button, Menu, MenuItem } from "@mui/material";

interface Props {
	item: MenuType;
	onHandleOpen: (label: string, event: React.MouseEvent<HTMLElement>) => void;
	onHandleClose: (label: string) => void;
	anchorEls: Record<string, HTMLElement | null>;
}
export default function RenderDesktopMenu(props: Props) {
	const { item, onHandleOpen, onHandleClose, anchorEls } = props;
	if (item.children) {
		return (
			<div
				key={item.label}
				onMouseEnter={(e) => onHandleOpen(item.label, e)}
				onMouseLeave={() => onHandleClose(item.label)}
				style={{ position: "relative" }}>
				<Button color="inherit">{item.label}</Button>
				<Menu
					anchorEl={anchorEls[item.label]}
					open={Boolean(anchorEls[item.label])}
					onClose={() => onHandleClose(item.label)}
					MenuListProps={{
						onMouseEnter: () => {}, // hover 유지
						onMouseLeave: () => onHandleClose(item.label),
					}}
					PaperProps={{ sx: { mt: 0 } }}>
					{item.children.map((child) => (
						<MenuItem key={child.label} component="a" href={child.href}>
							{child.label}
						</MenuItem>
					))}
				</Menu>
			</div>
		);
	}
	return (
		<Button key={item.label} color="inherit" component="a" href={item.href}>
			{item.label}
		</Button>
	);
}
