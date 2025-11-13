import { makeGridColomnLabels } from "@/util/grid-util";

export interface GridSampleData {
	id: number;
	name: string;
	loginId: string;
	age: number;
	job: string;
}

export const gridColumnLabels = makeGridColomnLabels<GridSampleData>({
	id: { label: "No", width: 50, align: "center" },
	name: { label: "이름", width: 150, align: "center", updateType: "input" },
	loginId: { label: "로그인 ID", width: 300 },
	age: { label: "나이", width: 60, align: "center" },
	job: {
		label: "직업",
		width: 200,

		updateType: "select",
		code: "40",
	},
});

export const sampleGridData: GridSampleData[] = [
	{
		id: 1,
		name: "홍길동",
		loginId: "hong01",
		age: 28,
		job: "프론트엔드 개발자",
	},
	{ id: 2, name: "김철수", loginId: "chulsoo", age: 31, job: "백엔드 개발자" },
	{
		id: 3,
		name: "이영희",
		loginId: "younghee",
		age: 26,
		job: "UI/UX 디자이너",
	},
	{
		id: 4,
		name: "박민수",
		loginId: "minsu84",
		age: 40,
		job: "기획자",
	},
	{ id: 5, name: "최수정", loginId: "soojung", age: 34, job: "QA 엔지니어" },
	{ id: 6, name: "정우성", loginId: "woosung", age: 29, job: "백엔드 개발자" },
	{ id: 7, name: "김하늘", loginId: "sky", age: 25, job: "데이터 분석가" },
	{ id: 8, name: "이상혁", loginId: "faker", age: 28, job: "게임 개발자" },
	{ id: 9, name: "신지원", loginId: "jiwon", age: 32, job: "풀스택 개발자" },
	{
		id: 10,
		name: "안유진",
		loginId: "yujin",
		age: 24,
		job: "프론트엔드 개발자",
	},
	{ id: 11, name: "한가을", loginId: "autumn", age: 30, job: "마케팅 매니저" },
	{
		id: 12,
		name: "강동원",
		loginId: "dongwon",
		age: 38,
		job: "시스템 엔지니어",
	},
	{
		id: 13,
		name: "조하늘",
		loginId: "hana",
		age: 27,
		job: "데브옵스 엔지니어",
	},
	{ id: 14, name: "서지은", loginId: "jieun", age: 33, job: "프로덕트 매니저" },
	{ id: 15, name: "최민호", loginId: "minho", age: 35, job: "보안 엔지니어" },
	{ id: 16, name: "장원영", loginId: "wonyoung", age: 23, job: "인턴" },
	{ id: 17, name: "이도현", loginId: "dohyun", age: 29, job: "모바일 개발자" },
	{
		id: 18,
		name: "박소연",
		loginId: "soyeon",
		age: 31,
		job: "데이터 엔지니어",
	},
	{ id: 19, name: "김민재", loginId: "minjae", age: 30, job: "AI 연구원" },
	{ id: 20, name: "오세훈", loginId: "sehoon", age: 27, job: "테크 리크루터" },
];

export const jobOptions: string[] = [
	"프론트엔드 개발자",
	"백엔드 개발자",
	"UI/UX 디자이너",
	"기획자",
	"QA 엔지니어",
	"데이터 분석가",
	"게임 개발자",
	"풀스택 개발자",
	"마케팅 매니저",
	"시스템 엔지니어",
	"데브옵스 엔지니어",
	"프로덕트 매니저",
	"보안 엔지니어",
	"인턴",
	"모바일 개발자",
	"데이터 엔지니어",
	"AI 연구원",
	"테크 리크루터",
];
