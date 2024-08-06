import React from 'react';
export declare function FilterDrawerView({ isOpen, drawerTitle, setOpenDrawer, children, }: React.PropsWithChildren<{
    drawerTitle?: string;
    hasSearched?: boolean;
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen?: boolean;
}>): import("react/jsx-runtime").JSX.Element;
export type TableFilterProps = {
    searchTerm: string;
    onSearchClear: () => void;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    columns: {
        [key: string]: any;
    }[];
    checkedColumns: string[];
    setCheckedColumns: React.Dispatch<React.SetStateAction<string[]>>;
    hideIndex?: number;
    children?: React.ReactNode;
    drawerTitle?: string;
    hasSearched?: boolean;
    showSearchOnTheRight?: boolean;
    enableDrawerFilter?: boolean;
    menu?: React.ReactNode;
};
export default function TableFilter({ searchTerm, onSearchClear, onSearchChange, columns, checkedColumns, setCheckedColumns, hideIndex, drawerTitle, hasSearched, enableDrawerFilter, showSearchOnTheRight, menu, children, }: TableFilterProps): import("react/jsx-runtime").JSX.Element;
