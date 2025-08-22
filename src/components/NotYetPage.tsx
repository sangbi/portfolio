import * as React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  Paper,
  LinearProgress,
} from "@mui/material";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import HourglassBottomRoundedIcon from "@mui/icons-material/HourglassBottomRounded";

export interface Props {
  /** 큰 제목 (기본: "준비 중입니다") */
  title?: string;
  /** 부제/설명 (기본 안내 문구) */
  subtitle?: string;
  /** 홈으로 가기 링크 href (기본: "/") */
  homeHref?: string;
  /** 진행중 표시바 노출 여부 */
  showProgress?: boolean;
  /** 예상 문구 (예: "곧 공개") */
  etaText?: string;
  /** 추가 액션 버튼 (예: 문의하기) */
  extraAction?: React.ReactNode;
}

/**
 * NoYey – 작업/오픈 준비중 화면 컴포넌트
 *
 * 사용 예시 (Next.js App Router):
 * ----------------------------------
 * // app/noyey/page.tsx
 * import NoYey from "@/components/NoYey";
 * export default function Page() {
 *   return <NoYey title="NoYey" etaText="곧 공개됩니다" />;
 * }
 * ----------------------------------
 */
export default function NotYetPage({
  title = "준비 중입니다",
  subtitle = "이 페이지는 아직 작업 중이에요. 곧 업데이트할게요!",
  homeHref = "/",
  showProgress = true,
  etaText = "",
  extraAction,
}: Props) {
  return (
    <Container
      maxWidth="md"
      sx={{ minHeight: "80vh", display: "grid", placeItems: "center" }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          p: { xs: 3, sm: 5 },
          borderRadius: 4,
        }}
      >
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <ConstructionRoundedIcon fontSize="large" />
            <HourglassBottomRoundedIcon fontSize="large" />
          </Box>

          <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {subtitle}
          </Typography>

          {showProgress && (
            <Box sx={{ width: "100%", mt: 1 }}>
              <LinearProgress />
              {etaText ? (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  sx={{ mt: 1 }}
                >
                  {etaText}
                </Typography>
              ) : null}
            </Box>
          )}

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ mt: 1 }}
          >
            <Button component={Link} href={homeHref} variant="contained">
              홈으로 가기
            </Button>
            {extraAction}
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}
