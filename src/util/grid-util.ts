export interface GridColumnOptions<T> {
	label: string;
	width?: number | string;
	align?: "left" | "center" | "right";
	updateYn?: boolean;
}

/**
 * 테이블 컬럼 한글명 적용 함수
 * @param map
 * @returns
 */
export const makeGridColomnLabels = <T extends object>(
	map: Record<keyof T, GridColumnOptions<T>>
) => map;

/**
 * 테이블 데이터 레이블 매칭 함수
 * @param data
 * @returns
 */
export const gridRowDataMap = <T extends object>(
	data: Record<keyof T, GridColumnOptions<T>>
): (keyof T)[] => {
	return Object.keys(data) as (keyof T)[];
};
