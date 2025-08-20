import theme from "@/styles/theme";
import {
  Button,
  Checkbox,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import TodoListTableRow from "./components/TodoListTableRow";

export default function TodoListHome() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const [input, setInput] = useState<string>("");
  const [datas, setDatas] = useState<string[]>([]);
  const [selChecks, setSelChecks] = useState<number[]>([]);
  const [selAll, setSelAll] = useState<boolean>(false);

  const handleInsert = () => {
    if (input === "") {
      return alert("빈 데이터는 추가할 수 없습니다.");
    }
    const newArr = [...datas, input];
    setDatas(newArr);
    setInput("");
  };

  const handleUpdate = (selIdx: number, selData: string) => {
    const newArr = [...datas];
    newArr.splice(selIdx, 1, selData);
    setDatas(newArr);
  };

  const handleDelete = () => {
    if (selChecks.length === 0) return alert("삭제할 항목을 선택하세요.");
    if (!confirm("선택한 항목을 삭제하시겠습니까?")) return;
    setDatas(datas.filter((_, i) => !selChecks.includes(i)));
    setSelChecks([]);
    setSelAll(false);
  };

  const handleCheck = (selIdx: number, checked: boolean) => {
    if (checked) {
      setSelChecks((prev) => [...prev, selIdx]);
    } else {
      setSelChecks((prev) => prev.filter((el) => el !== selIdx));
    }
  };

  useEffect(() => {
    if (selAll) {
      setSelChecks(Array.from({ length: datas.length }, (_, i) => i));
    } else {
      setSelChecks([]);
    }
  }, [selAll, datas]);

  return (
    <Stack
      sx={{ alignItems: "center", justifyContent: "center" }}
      flex={1}
      spacing={1}
    >
      <Typography variant="h4">TodoList</Typography>
      <Container
        sx={{
          backgroundColor: "#555",
          p: 1,
          borderRadius: 2,
        }}
      >
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
                if (e.key === "Enter") handleInsert();
              }}
            />
            <Button onClick={handleInsert}>추가</Button>
          </Stack>
          {/* result */}
          <TableContainer sx={{ backgroundColor: "#777" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ py: 1 }}>
                    <Checkbox
                      size="small"
                      checked={selAll}
                      onClick={() => setSelAll((p) => !p)}
                    />
                  </TableCell>
                  <TableCell sx={{ width: "100%" }}></TableCell>
                  <TableCell sx={{ py: 1 }}>
                    <Button onClick={handleDelete} size="small">
                      선택삭제
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {datas.map((el, idx) => {
                  return (
                    <TodoListTableRow
                      key={idx}
                      seq={idx}
                      data={el}
                      selected={selChecks.includes(idx)}
                      onClickUpdate={handleUpdate}
                      onClickCheck={handleCheck}
                      isDesktop={isDesktop}
                    />
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Container>
    </Stack>
  );
}
