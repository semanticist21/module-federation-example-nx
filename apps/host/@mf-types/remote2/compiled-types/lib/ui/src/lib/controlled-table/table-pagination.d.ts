import { PaginationProps } from './pagination';
export type TablePaginationProps = {
    pageSize: number;
    setPageSize?: React.Dispatch<React.SetStateAction<number>>;
    paginatorClassName?: string;
} & PaginationProps;
export default function TablePagination({ pageSize, setPageSize, total, paginatorClassName, ...props }: TablePaginationProps): import("react/jsx-runtime").JSX.Element;
