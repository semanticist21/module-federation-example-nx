declare const RenderAction: ({ row, onDeleteItem, }: {
    row: unknown & {
        id: string;
    };
    onDeleteItem: (id: string) => void;
}) => import("react/jsx-runtime").JSX.Element;
export default RenderAction;
