interface AnyObject {
    [key: string]: any;
}
export declare function useTable<T extends AnyObject>(initialData: T[], countPerPage?: number, initialFilterState?: Partial<Record<string, any>>): {
    isLoading: boolean;
    isFiltered: boolean;
    tableData: T[];
    currentPage: number;
    handlePaginate: (pageNumber: number) => void;
    totalItems: number;
    sortConfig: AnyObject;
    handleSort: (key: string) => void;
    selectedRowKeys: string[];
    setSelectedRowKeys: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    handleRowSelect: (recordKey: string) => void;
    handleSelectAll: () => void;
    searchTerm: string;
    handleSearch: (searchValue: string) => void;
    filters: Record<string, any>;
    updateFilter: (columnId: string, filterValue: string | any[]) => void;
    applyFilters: () => T[];
    handleDelete: (id: string | string[]) => void;
    handleReset: () => void;
};
export {};
