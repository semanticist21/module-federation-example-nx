import DeletePopover from './delete-popover';

const RenderAction = ({
  row,
  onDeleteItem,
}: {
  row: unknown & { id: string };
  onDeleteItem: (id: string) => void;
}) => {
  return (
    <div className="flex items-center justify-end gap-3 pe-3">
      <DeletePopover
        title="서비스 아이템 삭제"
        description="정말로 삭제하시겠습니까?"
        onDelete={() => onDeleteItem(row.id)}
      />
    </div>
  );
};

export default RenderAction;
