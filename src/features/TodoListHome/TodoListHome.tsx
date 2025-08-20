import theme from "@/styles/theme";
import {
	Button,
	Container,
	Stack,
	Table,
	TableBody,
	TableContainer,
	TextField,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import TodoListTableRow from "./components/TodoListTableRow";

export default function TodoListHome() {
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"), {
		defaultMatches: true,
	});
	const [input, setInput] = useState<string>("");
	const [datas, setDatas] = useState<string[]>([]);

	// 데이터 추가
	const handleClickTodoInsert = () => {
		if (input === "") {
			return alert("빈 데이터는 추가할 수 없습니다.");
		}
		const newArr = [...datas, input];
		setDatas(newArr);
		setInput("");
	};

	return (
		<Stack
			sx={{ alignItems: "center", justifyContent: "center" }}
			flex={1}
			spacing={1}>
			<Typography variant="h4">TodoList</Typography>
			<Container
				sx={{
					backgroundColor: "#555",
					p: 1,
					borderRadius: 2,
				}}>
				<Stack spacing={2}>
					{/* input */}
					<Stack direction={"row"} justifyContent={"center"} spacing={1}>
						<TextField
							type="search"
							sx={{ maxWidth: isDesktop ? "600px" : "none" }}
							fullWidth
							placeholder="할 일을 입력해주세요"
							size="small"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter") handleClickTodoInsert();
							}}
						/>
						<Button onClick={handleClickTodoInsert}>추가</Button>
					</Stack>
					{/* result */}
					<TableContainer sx={{ backgroundColor: "#777" }}>
						<Table>
							<TableBody>
								{datas.map((el, idx) => {
									return <TodoListTableRow key={idx} data={el} />;
								})}
							</TableBody>
						</Table>
					</TableContainer>
				</Stack>
			</Container>
		</Stack>
	);
}
