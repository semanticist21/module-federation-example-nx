import RcTable from 'rc-table';
export type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T;
declare const classes: {
    table: string;
    thead: string;
    tCell: string;
    variants: {
        classic: string;
        modern: string;
        minimal: string;
        elegant: string;
        retro: string;
    };
    striped: string;
};
type RCTableProps = ExtractProps<typeof RcTable>;
export interface TableProps extends Omit<RCTableProps, 'className' | 'emptyText'> {
    /** Set empty text, it will only appear when table has no data */
    emptyText?: React.ReactElement;
    /** The variants of the component are: */
    variant?: keyof typeof classes.variants;
    /** Add striping style */
    striped?: boolean;
    /** Add custom classes for extra style */
    className?: string;
}
/**
 *  React table component with useful functions. Under the hood we are using `rc-table` package,
 * you can check their official documentation for more details -> https://www.npmjs.com/package/rc-table
 */
export default function Table({ striped, variant, emptyText, className, ...props }: TableProps): import("react/jsx-runtime").JSX.Element;
type TextAlign = 'left' | 'center' | 'right';
export interface HeaderCellProps {
    title: React.ReactNode;
    width?: number;
    /** Set table header cell text alignment */
    align?: TextAlign;
    /** Make header cell text ellipsis, you need to set width prop too */
    ellipsis?: boolean;
    /** Make sortable column, it's also required ascending prop too. Check our example for more details. */
    sortable?: boolean;
    /** Make ascending column, it's also required sortable prop too. Check our example for more details. */
    ascending?: boolean;
    /** Add custom classes to the sort icon for extra style */
    iconClassName?: string;
    /** Add custom classes for extra style */
    className?: string;
}
export declare function HeaderCell({ title, align, width, ellipsis, sortable, ascending, iconClassName, className, }: HeaderCellProps): import("react/jsx-runtime").JSX.Element;
type ToggleColumnsTypes<T> = {
    columns: T[];
    checkedColumns: string[];
    setCheckedColumns: React.Dispatch<React.SetStateAction<string[]>>;
    hideIndex?: number;
};
export declare function ToggleColumns<T>({ columns, checkedColumns, setCheckedColumns, hideIndex, }: ToggleColumnsTypes<T>): import("react/jsx-runtime").JSX.Element;
export {};
