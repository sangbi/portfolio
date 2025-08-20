"use client";

import { menuItems } from "@/router/menu";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	IconButton,
	Toolbar,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import RenderDesktopMenu from "./components/RenderDesktopMenu";
import RenderMobileMenu from "./components/RenderMobileMenu";

export default function Topbar() {
	const theme = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	// 클라이언트에서만 실제 화면 크기를 계산
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"), {
		defaultMatches: true,
	});

	const [anchorEls, setAnchorEls] = useState<
		Record<string, HTMLElement | null>
	>({});
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

	const handleOpen = (label: string, event: React.MouseEvent<HTMLElement>) => {
		setAnchorEls((prev) => ({ ...prev, [label]: event.currentTarget }));
	};
	const handleClose = (label: string) => {
		setAnchorEls((prev) => ({ ...prev, [label]: null }));
	};

	return (
		<>
			<AppBar position="static">
				<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
					{isDesktop ? (
						<div style={{ display: "flex", gap: 16 }}>
							{menuItems.map((el, idx) => (
								<RenderDesktopMenu
									key={idx}
									item={el}
									onHandleOpen={handleOpen}
									onHandleClose={handleClose}
									anchorEls={anchorEls}
								/>
							))}
						</div>
					) : (
						<IconButton
							edge="end"
							color="inherit"
							onClick={() => setDrawerOpen(true)}>
							<MenuIcon />
						</IconButton>
					)}
				</Toolbar>
			</AppBar>

			{!isDesktop && (
				<RenderMobileMenu
					items={menuItems}
					drawerOpen={drawerOpen}
					onDrawerOpen={setDrawerOpen}
				/>
			)}
		</>
	);
}
