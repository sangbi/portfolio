"use client";
import { Box, Typography, Stack, Chip, Divider, Avatar } from "@mui/material";

export default function ResumeHome() {
	return (
		<Box sx={{ maxWidth: 800, mx: "auto", p: 4 }}>
			{/* Header with Photo & Info */}
			<Stack direction="row" spacing={3} alignItems="center">
				{/* Profile Image */}
				<Avatar
					src="/profile.jpg" // public 폴더에 profile.jpg 넣으면 됨
					alt="Profile Photo"
					sx={{ width: 120, height: 140, borderRadius: 2 }}
				/>
				{/* Info */}
				<Box>
					<Typography variant="h4" fontWeight="bold">
						이상빈
					</Typography>
					<Typography variant="subtitle1" color="text.secondary">
						풀스택 개발자 | React · Next.js · Node.js · Spring Boot
					</Typography>
					<Typography sx={{ mt: 1 }}>📧 dltkdqls9603@naver.com</Typography>
					<Typography>📍 경기도 하남시 (거주지)</Typography>
					<Typography>🌐 github.com/yourid</Typography>
				</Box>
			</Stack>

			<Divider sx={{ my: 3 }} />

			{/* Skills */}
			<Typography variant="h5" gutterBottom>
				Skills
			</Typography>
			<Stack
				direction="row"
				flexWrap="wrap"
				sx={{ "& .MuiChip-root": { mt: 1, mr: 1 } }}>
				<Chip label="React" />
				<Chip label="Next.js" />
				<Chip label="JavaScript" />
				<Chip label="TypeScript" />
				<Chip label="MUI" />
				<Chip label="Node.js" />
				<Chip label="Spring Boot" />
				<Chip label="Oracle" />
				<Chip label="MySQL" />
				<Chip label="PostgreSQL" />
				<Chip label="Jenkins" />
				<Chip label="Java" />
				<Chip label="Gradle" />
				<Chip label="Docker" />
				<Chip label="Bash Shell" />
				<Chip label="RESTful API" />
			</Stack>

			<Divider sx={{ my: 3 }} />

			{/* Experience */}
			<Typography variant="h5" gutterBottom>
				Experience
			</Typography>
			<Box>
				<Typography variant="h6">크레디트라인</Typography>
				<Typography variant="subtitle2" color="text.secondary">
					2022.08 - 재직중 | 풀스택 개발자 (Frontend & Backend)
				</Typography>
				<ul>
					<li>사내 Rule Engine 시스템 개발 (Next.js + Node.js + Oracle)</li>
					<li>관리자 대시보드 UI 개발 (MUI, Chart.js)</li>
					<li>Jenkins CI/CD 파이프라인 구축</li>
				</ul>

				{/* 주요 성과 */}
				<Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
					주요 성과
				</Typography>
				<Stack>
					<ul>
						<li>
							<Typography variant="h6">사내 정보보안 자동화 시스템</Typography>
						</li>
						<Typography variant="subtitle2" color="text.secondary" mb={1}>
							2024.12 - 2025.07 | 백엔드/DB/프론트엔드 개발 | 대리
						</Typography>
						정보보안 자동 발송 메일 시스템 개발
						<br />
						외부 접근 탐색 차단 및 불량 데이터 적발 후 보고 시스템 구축
						<br />
						프로젝트 프론트 서버 오프라인 환경 셋팅
						<br />
						Oracle DB 기반 RESTful API 개발 및 Next.js/React/TypeScript를 이용한
						화면 개발
						<br />
						DB, 백엔드 중심 작업과 프론트엔드 동시 개발 수행
						<br />
						통합 테스트 완료 후 프로젝트 마무리
						<br />
					</ul>

					<ul>
						<li>
							<Typography variant="h6">VM 서버 이전 프로젝트</Typography>
						</li>
						<Typography variant="subtitle2" color="text.secondary" mb={1}>
							2024.10 - 2024.12 | 백엔드/운영 | 사원
						</Typography>
						금융권 개발 및 운영 서버 분리로 인한 프로젝트 VM 웨어 서버 이전 작업
						수행
						<br />
						서버 이전을 위해 프로젝트 목록화 및 관련 서류 작업 진행
						<br />
						서버 기동 테스트를 위해 Bash Shell 스크립트 개발
						<br />
					</ul>

					<ul>
						<li>
							<Typography variant="h6">
								국가특수교육원(국특원) 프로젝트
							</Typography>
						</li>
						<Typography variant="subtitle2" color="text.secondary" mb={1}>
							2024.09 - 2024.10 | 프론트엔드 개발(긴급 인력 투입)
						</Typography>
						시각/청각 장애인을 위한 맞춤형 온라인 학습 콘텐츠 개발
						<br />
						카카오워크, Figma를 활용하여 기획 및 디자인 팀과 협업
						<br />
						React 기반 웹 접근성을 고려하여 음성 퀴즈, 동영상 시청, 교육 콘텐츠
						개발
						<br />
						Build 디렉토리 생성 후 AWS에 배포 및 운영
						<br />
					</ul>
					<ul>
						<li>
							<Typography variant="h6">
								FDS(금융권) 고도화 솔루션 개발
							</Typography>
						</li>
						<Typography variant="subtitle2" color="text.secondary" mb={1}>
							2024.01 - 2024.09 | 솔루션사업부 | 사원
						</Typography>
						Fraud Detection System(사기 탐지 시스템) 관리 화면 개발, 데이터
						이상치 Filtering 및 실시간 모니터링 시스템 구축
						<br />
						<br />
						<strong>백엔드</strong>
						<br />
						Spring Boot 초기 세팅, Gradle 기반 빌드 환경 구축, Oracle 연동 CRUD
						개발. Spring Security 기반 사용자 인증 및 권한관리, 로그관리, Spring
						Batch를 활용한 배치 잡 개발 참여
						<br />
						<br />
						<strong>프론트엔드</strong>
						<br />
						React 초기 설정 및 TypeScript 연동. 금융업무 특화 공통 Grid 컴포넌트
						개발, Dashboard UI 개발, 실시간 Alert 출력 기능, 사용자 인증을 위한
						JavaScript Token Storage 구현
					</ul>
					<ul>
						<li>
							<Typography variant="h6">
								ADMS 인공지능 AI 도서 파싱 및 데이터 라벨링 개발
							</Typography>
						</li>
						<Typography variant="subtitle2" color="text.secondary" mb={1}>
							2023.07 - 2023.12 | 솔루션사업부 | 사원
						</Typography>
						<strong>상세 업무</strong>
						<br /> 타 개발 회사와 협력 개발로 엑셀 파일로 정리된 도서데이터를
						파싱하여 교육직 관련 작업자들이 추출,정제,라벨링 작업을 진행할 수
						있게 백엔드 및 프론트 엔드 개발
						<br />
						<br /> <strong>담당 업무</strong>
						<br /> 크레디트라인 플랫폼을 이용해 요건에 맞게 환경설정 및 특성에
						맞는 화면 및 공통 컴포넌트 개발
						<br /> 관리자 및 사용자 등 업무를 진행하기 위한 관리자 페이지 개발
						<br />
						로그인, 라벨링 화면, 사용자 관리 , 권한 관리 화면 등 DB CRUD 백엔드
						, 프론트엔드 개발
						<br /> git으로 형상관리를 하여 여러 개발자들과 협업 개발 및 배포
					</ul>
					<ul>
						<li>
							<Typography variant="h6">크레디트라인 플랫폼 개발</Typography>
						</li>
						<Typography variant="subtitle2" color="text.secondary" mb={1}>
							2022.08 - 2023.06 | 솔루션사업부 | 사원
						</Typography>
						CI/CD 환경 구축의 함께 참여하여 지속적으로 통합및 배포
						<br />
						도커, 도커허브를 사용해 도커 이미지를 컨테이너화 및 저장하고 관리
						<br />
						젠킨스를 설정하고 이용해 빌드,테스트,배포 프로세스를 자동화
						<br />
						도커에 이미지를 새로 업로드하고 도커 허브에 저장
						<br />
						<br />
						<strong>백엔드</strong>
						<br />
						gradle을 사용하여 프로젝트 빌드 및 의존성관리
						<br />
						oracle Java springboot 프레임워크를 사용하며
						<br />
						mvc 패턴을 이용한 restfulApi 개발 방식으로 진행
						<br />
						<br />
						<strong>프론트엔드</strong>
						<br />
						nodeJs와 pnpm으로 빌드환경을 구축
						<br />
						React , TypeScript로 인터페이스 개발을 진행
					</ul>
				</Stack>
			</Box>
			<Box>
				<Typography variant="h6">(주)엠아이티마스</Typography>
				<Typography variant="subtitle2" color="text.secondary">
					2019.09 - 2020.09 | 정규직 | 사원
				</Typography>
				<ul>
					<li>보험사 직원 서비스 문제 상담</li>
					<li>데스크탑, 태블릿PC 원격 기능장애 및 오류 조치</li>
				</ul>

				{/* 주요 성과 */}
				<Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
					주요 성과
				</Typography>
				<Stack>
					<ul>
						<li>
							<Typography variant="h6">사내 정보보안 자동화 시스템</Typography>
						</li>
						<Typography variant="subtitle2" color="text.secondary" mb={1}>
							2024.12 - 2025.07 | 백엔드/DB/프론트엔드 개발 | 대리
						</Typography>
						전화상담을 통해 주요 업무 설명 및 태블릿 시스템 오류 해결
						<br />
						업무 관련 특정 미확인 에러 발생 시 해당 오류 상부 조치
						<br />
						프로젝트 프론트 서버 오프라인 환경 셋팅
						<br />
						Oracle DB 기반 RESTful API 개발 및 Next.js/React/TypeScript를 이용한
						화면 개발
						<br />
						DB, 백엔드 중심 작업과 프론트엔드 동시 개발 수행
						<br />
						통합 테스트 완료 후 프로젝트 마무리
						<br />
					</ul>
				</Stack>
			</Box>

			<Divider sx={{ my: 3 }} />

			{/* Education */}
			<Typography variant="h5" gutterBottom>
				Education
			</Typography>
			<Box sx={{ mb: 3 }}>
				<Typography variant="h6">동원대학교</Typography>
				<Typography variant="subtitle2" color="text.secondary">
					정보통신전공 | 2015.03 - 2019.02 (3년 11개월)
				</Typography>
			</Box>
		</Box>
	);
}
