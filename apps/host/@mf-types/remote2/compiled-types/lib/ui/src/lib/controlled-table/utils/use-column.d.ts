export declare const filterData: <T extends Record<string, any>>(array: T[], filterKeys: string[]) => T[];
export declare const useColumn: <T extends Record<string, any>>(columnsData: T[]) => {
    visibleColumns: T[];
    checkedColumns: any[];
    setCheckedColumns: import("react").Dispatch<import("react").SetStateAction<any[]>>;
};
