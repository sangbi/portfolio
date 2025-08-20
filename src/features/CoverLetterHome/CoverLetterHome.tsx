"use client";
import { Box, Typography, Divider, Stack } from "@mui/material";

export default function CoverLetterHome() {
	return (
		<Box sx={{ maxWidth: 800, mx: "auto", p: 4 }}>
			{/* Header */}
			<Box sx={{ mb: 4 }}>
				<Typography variant="h4" fontWeight="bold">
					자기소개서
				</Typography>
				<Typography variant="subtitle1" color="text.secondary">
					이상빈 | 풀스택 개발자
				</Typography>
			</Box>

			<Divider sx={{ mb: 3 }} />

			{/* Introduction Section */}
			<Box sx={{ mb: 4 }}>
				<Typography variant="h5" gutterBottom>
					1. 자기소개
				</Typography>
				<Typography>
					안녕하세요! 저는 3년차 개발자로, 현재 크레디트라인 솔루션 개발팀에서
					다양한 프로젝트를 수행하며 프론트엔드와 백엔드를 아우르는 개발 역량을
					쌓고 있습니다.
					<br /> 주력 기술로는 React, Next.js, JavaScript, TypeScript를 활용한
					웹 프론트엔드 개발에 강점을 가지고 있습니다.
					<br />
					서브로는 Java Spring Boot 기반의 백엔드 개발을 수행하고 있으며,
					RESTful API 개발과 Oracle, MySQL, PostgreSQL 데이터베이스 설계 및 운영
					경험도 보유하고 있습니다.
					<br />
					또한 리눅스 환경, Docker, Jenkins, GitHub을 활용한 컨테이너 구축 및
					배포 경험도 갖추고 있습니다.
					<br />
					저의 목표는 완전한 풀스택 개발자로 성장하는 것입니다. 처음 개발을
					가르쳐주신 사수님께서는 “빈 깡통 컴퓨터 한 대부터 인프라 구축, 화면
					구현까지 직접 경험해야 진정한 풀스택 개발자”라고 말씀해주셨습니다.
					앞으로도 이 목표를 이루기 위해 꾸준히 역량을 확장해 나가고 있습니다.
				</Typography>
			</Box>

			<Divider sx={{ mb: 3 }} />

			{/* Experience / Project Section */}
			<Box sx={{ mb: 4 }}>
				<Typography variant="h5" gutterBottom>
					2. 주요 프로젝트 경험
				</Typography>
				<Stack spacing={2}>
					{/* 크레디트라인 */}
					<Box>
						<Typography variant="h6">
							크레디트라인 - Rule Engine 시스템 개발
						</Typography>
						<Typography variant="subtitle2" color="text.secondary">
							2022.08 - 재직중 | 풀스택 개발자 (Frontend & Backend)
						</Typography>
						<Typography paragraph>
							- 사내 Rule Engine 시스템 개발 (Next.js, React, Node.js, Oracle)
							<br />
							- 관리자 대시보드 UI 개발 (MUI, Chart.js)
							<br />- Jenkins CI/CD 파이프라인 구축
						</Typography>
						<Typography
							variant="subtitle2"
							color="text.secondary"
							sx={{ fontWeight: "bold" }}>
							주요 성과
						</Typography>
						<ul>
							<li>
								<strong>사내 정보보안 자동화 시스템:</strong> 정보보안 자동 발송
								메일 및 외부 접근 차단 시스템 개발, Oracle DB 기반 RESTful API
								구축, Next.js/React/TypeScript 화면 개발
							</li>
							<li>
								<strong>VM 서버 이전 프로젝트:</strong> 금융권 서버 분리 및 VM
								웨어 이전, 프로젝트 목록화 및 서류 작업, 서버 기동 테스트 Bash
								Shell 개발
							</li>
							<li>
								<strong>국가특수교육원 프로젝트:</strong> 시각/청각 장애인
								맞춤형 온라인 학습 콘텐츠 개발, 카카오워크/Figma 협업, React
								기반 웹 접근성 고려 음성 퀴즈/동영상 콘텐츠 개발, AWS 배포
							</li>
							<li>
								<strong>FDS(금융권) 고도화 솔루션:</strong> Fraud Detection
								System 관리 화면 개발, 데이터 이상치 Filtering 및 실시간
								모니터링 시스템 구축
								<br />
								백엔드: Spring Boot 세팅, Gradle 빌드, Oracle CRUD, Spring
								Security 인증 및 권한/로그 관리, Spring Batch 배치 잡<br />
								프론트엔드: React/TypeScript, Dashboard UI, 공통 Grid 컴포넌트,
								실시간 Alert, Token Storage 구현
							</li>
						</ul>
					</Box>

					{/* MITMAS */}
					<Box>
						<Typography variant="h6">
							(주)엠아이티마스 - 보험사 지원 시스템
						</Typography>
						<Typography variant="subtitle2" color="text.secondary">
							2019.09 - 2020.09 | 정규직
						</Typography>
						<Typography paragraph>
							- 보험사 직원 서비스 문제 상담 및 데스크탑/태블릿PC 원격 오류 조치
							<br />- 주요 업무 관련 미확인 에러 발생 시 상부 조치 및 문제 해결
						</Typography>
					</Box>
				</Stack>
			</Box>

			<Divider sx={{ mb: 3 }} />

			{/* Skills / Strength Section */}
			<Box sx={{ mb: 4 }}>
				<Typography variant="h5" gutterBottom>
					3. 보유 기술 및 강점
				</Typography>
				<Typography>
					<br />
					<strong>프론트엔드:</strong> React, Next.js, TypeScript, JavaScript를
					활용한 SPA 및 서버사이드 렌더링 개발, MUI와 Chart.js 등 UI
					라이브러리를 활용한 대시보드 화면 구성 경험이 있습니다.
					<br />
					<br />
					<strong>백엔드:</strong> Java Spring Boot 기반 MVC 패턴 설계, RESTful
					API 개발, Spring Security를 활용한 인증/권한 관리, Spring Batch를
					활용한 배치 잡 개발 경험이 있습니다.
					<br />
					<br />
					<strong>데이터베이스:</strong> Oracle, MySQL, PostgreSQL 기반 데이터
					설계 및 CRUD, 복잡한 쿼리 최적화 경험을 보유하고 있습니다.
					<br />
					<br />
					<strong>배포 및 운영:</strong> Docker, Jenkins, GitHub을 활용한 CI/CD
					환경 구축 및 배포 경험, Bash Shell 스크립트를 이용한 서버 운영 및
					자동화 경험이 있습니다.
					<br />
					<br />
					이러한 기술 역량을 바탕으로 프론트엔드와 백엔드를 동시에 고려한
					통합적인 설계 및 개발이 가능하며, 문제 해결 능력과 효율적인 협업
					능력을 갖춘 풀스택 개발자입니다.
				</Typography>
			</Box>

			<Divider sx={{ mb: 3 }} />

			{/* Closing / Message Section */}
			<Box sx={{ mb: 4 }}>
				<Typography variant="h5" gutterBottom>
					4. 입사 후 포부
				</Typography>
				<Typography>
					입사하게 된다면, 저는 먼저 팀에서 맡은 업무를 꼼꼼하게 이해하고 실무에
					빠르게 적응하는 것을 목표로 하고 있습니다.
					<br />
					<br />
					프론트엔드와 백엔드를 넘나드는 풀스택 경험을 바탕으로, 개발 과정에서
					발생하는 문제를 직접 해결하며 서비스 품질 향상에 기여하고 싶습니다.
					<br />
					<br />
					또한 팀원들과 적극적으로 소통하고 협력하면서, 서로의 경험과 지식을
					공유해 프로젝트가 더 원활하게 진행되도록 돕겠습니다.
					<br />
					<br />
					장기적으로는 다양한 기술 스택을 활용해 회사가 새로운 서비스를
					만들어가는 과정에서 핵심 역할을 맡고, 같이 성장하는 개발자가 되고
					싶습니다.
				</Typography>
			</Box>
		</Box>
	);
}
