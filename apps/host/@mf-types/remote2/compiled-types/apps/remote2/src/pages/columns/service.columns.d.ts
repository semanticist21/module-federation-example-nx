import { serviceItemType } from '../data/data';
type Columns = {
    data: any[];
    sortConfig?: any;
    handleSelectAll: any;
    checkedItems: string[];
    onDeleteItem: (id: string) => void;
    onHeaderCellClick: (value: string) => void;
    onChecked: (id: string) => void;
    handleOpenEditModal: (item: serviceItemType) => void;
};
export declare const GetServiceColumns: ({ handleSelectAll, sortConfig, onDeleteItem, onHeaderCellClick, data, checkedItems, onChecked, handleOpenEditModal, }: Columns) => ({
    title: import("react/jsx-runtime").JSX.Element;
    dataIndex: string;
    key: string;
    onHeaderCell: () => void;
    width: number;
    render: (svcCategory: string) => import("react/jsx-runtime").JSX.Element;
} | {
    title: import("react/jsx-runtime").JSX.Element;
    dataIndex: string;
    key: string;
    width: number;
    render: (_: string, row: any) => import("react/jsx-runtime").JSX.Element;
    onHeaderCell?: undefined;
})[];
export {};
