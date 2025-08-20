import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Checkbox,
  IconButton,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface Props {
  seq: number;
  data: string;
  selected: boolean;
  onClickUpdate: (selIdx: number, selData: string) => void;
  onClickCheck: (selIdx: number, checked: boolean) => void;
  isDesktop: boolean;
}
export default function TodoListTableRow(props: Props) {
  const { seq, data, selected, onClickUpdate, onClickCheck, isDesktop } = props;
  const [uptMode, setUptMode] = useState<boolean>(false);
  const [uptData, setUptData] = useState<string>(data);

  const handleClickUptInstBtn = () => {
    if (uptMode) {
      if (uptData === "") {
        return alert("빈데이터로 수정할 수 없습니다.");
      }
      if (!confirm("수정하시겠습니까?")) return;
      onClickUpdate(seq, uptData);
    }
    setUptMode((p) => !p);
  };

  const handleClickCloseBtn = () => {
    if (!confirm("취소하시겠습니까? 수정된 내용은 저장되지 않습니다.")) return;
    setUptMode(false);
    setUptData(data);
  };

  return (
    <TableRow>
      <TableCell sx={{ py: 0 }}>
        <Checkbox
          size="small"
          checked={selected}
          onChange={() => {
            onClickCheck(seq, !selected);
          }}
        />
      </TableCell>
      <TableCell sx={{ width: "100%", py: uptMode ? 1 : undefined }}>
        {uptMode ? (
          <TextField
            sx={{ maxWidth: isDesktop ? "100%" : undefined }}
            fullWidth
            size="small"
            value={uptData}
            onChange={(e) => {
              setUptData(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (!confirm("수정하시겠습니까?")) return;
                onClickUpdate(seq, uptData);
                setUptMode((p) => !p);
              }
            }}
          />
        ) : (
          <Typography>{data}</Typography>
        )}
      </TableCell>
      <TableCell sx={{ minWidth: 100, py: 0 }}>
        <IconButton size="small" onClick={handleClickUptInstBtn}>
          {uptMode ? <SaveIcon /> : <EditIcon />}
        </IconButton>
        {uptMode && (
          <IconButton size="small" onClick={handleClickCloseBtn}>
            <CloseIcon />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
}
