import type { TablePaginationProps } from './table-pagination';
import type { TableFilterProps } from './table-filter';
import { TableProps } from './table';
import React from 'react';
type ControlledTableProps = {
    isLoading?: boolean;
    showLoadingText?: boolean;
    filterElement?: React.ReactElement;
    filterOptions?: TableFilterProps;
    paginatorOptions?: TablePaginationProps;
    tableFooter?: React.ReactNode;
    className?: string;
    paginatorClassName?: string;
} & TableProps;
export default function ControlledTable({ isLoading, filterElement, filterOptions, paginatorOptions, tableFooter, showLoadingText, paginatorClassName, className, ...tableProps }: ControlledTableProps): import("react/jsx-runtime").JSX.Element;
export {};
