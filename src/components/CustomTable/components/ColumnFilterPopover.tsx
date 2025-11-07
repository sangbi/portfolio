import { GridColumnOptions } from "@/util/grid-util";
import {
	DragDropContext,
	Draggable,
	DraggableProvided,
	Droppable,
	DroppableProvided,
	DropResult,
} from "@hello-pangea/dnd";
import DehazeIcon from "@mui/icons-material/Dehaze";
import {
	IconButton,
	List,
	ListItem,
	ListItemText,
	Popover,
	Switch,
} from "@mui/material";

type Props<T extends { id: number }> = {
	open: boolean;
	anchorEl: HTMLElement | null;
	onClose: () => void;
	columnKeys: (keyof T)[];
	setColumnKeys: (keys: (keyof T)[]) => void;
	hiddenColumns: Set<keyof T>;
	setHiddenColumns: (set: Set<keyof T>) => void;
	columnLabel: Record<keyof T, GridColumnOptions<T>>;
};

export default function ColumnSettingPopover<T extends { id: number }>(
	props: Props<T>
) {
	const {
		open,
		anchorEl,
		onClose,
		columnKeys,
		setColumnKeys,
		hiddenColumns,
		setHiddenColumns,
		columnLabel,
	} = props;

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return;
		const newKeys = [...columnKeys];
		const [removed] = newKeys.splice(result.source.index, 1);
		newKeys.splice(result.destination.index, 0, removed);
		setColumnKeys(newKeys);
	};

	const toggleColumn = (key: keyof T) => {
		const newHidden = new Set(hiddenColumns);
		newHidden.has(key) ? newHidden.delete(key) : newHidden.add(key);
		setHiddenColumns(newHidden);
	};

	return (
		<Popover
			open={open}
			anchorEl={anchorEl}
			onClose={onClose}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="columns">
					{(provided: DroppableProvided) => (
						<List
							{...provided.droppableProps}
							ref={provided.innerRef}
							sx={{ p: 1, width: 230 }}>
							{columnKeys.map((key, index) => (
								<Draggable
									draggableId={String(key)}
									index={index}
									key={String(key)}>
									{(provided: DraggableProvided) => (
										<ListItem
											ref={provided.innerRef}
											{...provided.draggableProps}
											dense
											sx={{
												display: "flex",
												alignItems: "center",
												justifyContent: "space-between",
												px: 1,
											}}>
											<Switch
												size="small"
												checked={!hiddenColumns.has(key)}
												onChange={() => toggleColumn(key)}
												sx={{ mr: 1 }}
											/>
											<ListItemText primary={columnLabel[key].label} />
											<IconButton size="small" {...provided.dragHandleProps}>
												<DehazeIcon fontSize="small" />
											</IconButton>
										</ListItem>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</List>
					)}
				</Droppable>
			</DragDropContext>
		</Popover>
	);
}
