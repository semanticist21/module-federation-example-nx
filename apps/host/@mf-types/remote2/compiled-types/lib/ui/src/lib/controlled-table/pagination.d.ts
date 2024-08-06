import { PaginationProps as RcPaginationProps } from 'rc-pagination';
import 'rc-pagination/assets/index.css';
declare const classes: {
    base: {
        item: string;
        icon: string;
        outline: string;
        jumperDiv: string;
        jumperInput: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        full: string;
    };
    variant: {
        solid: {
            base: string;
            color: {
                primary: string;
                secondary: string;
                danger: string;
                info: string;
                success: string;
                warning: string;
            };
        };
        flat: {
            base: string;
            color: {
                primary: string;
                secondary: string;
                danger: string;
                info: string;
                success: string;
                warning: string;
            };
        };
    };
};
export declare const localeDefault: {
    items_per_page: string;
    jump_to: string;
    jump_to_confirm: string;
    page: string;
    prev_page: string;
    next_page: string;
    prev_5: string;
    next_5: string;
    prev_3: string;
    next_3: string;
    page_size: string;
};
export interface PaginationProps extends RcPaginationProps {
    /** Whether show outline or not */
    outline?: boolean;
    /** Rounded variations are */
    rounded?: keyof typeof classes.rounded;
    /** These are the variants we support */
    variant?: keyof typeof classes.variant;
    /** Available colors */
    color?: keyof typeof classes.variant.flat.color;
    /** Pass className for previous icon */
    prevIconClassName?: string;
    /** Pass className for next icon */
    nextIconClassName?: string;
    /** Pass className for previous icon */
    jumpPrevIconClassName?: string;
    /** Pass className for next icon */
    jumpNextIconClassName?: string;
}
/**
 * We used `rc-pagination` package to build pagination component.
 * See their [official documentation](https://pagination-react-component.vercel.app/) for more info.
 */
declare function Pagination({ outline, rounded, variant, color, locale, nextIcon, prevIcon, prevIconClassName, nextIconClassName, jumpPrevIcon, jumpNextIcon, jumpPrevIconClassName, jumpNextIconClassName, className, ...props }: PaginationProps): import("react/jsx-runtime").JSX.Element;
declare namespace Pagination {
    var displayName: string;
}
export default Pagination;
