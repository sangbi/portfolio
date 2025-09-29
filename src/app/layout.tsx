"use client";

import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "@/styles/theme";
import Topbar from "@/layout/Topbar/Topbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" style={{ height: "100%" }}>
      <body style={{ height: "100%", margin: 0 }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Topbar />
            <Box sx={{ flex: 1, width: "100%", py: 1, px: 1 }}>{children}</Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
