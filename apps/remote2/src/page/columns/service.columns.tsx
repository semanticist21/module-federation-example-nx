import { ActionIcon, Checkbox, Text, Tooltip } from 'rizzui';
import { MdModeEdit } from 'react-icons/md';
import { serviceItemType } from '../data/data';
import { HeaderCell } from 'lib/ui/src/lib/controlled-table/table';
import RenderAction from 'lib/ui/src/lib/pop-over/render-action';

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

export const GetServiceColumns = ({
  handleSelectAll,
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
  data,
  checkedItems,
  onChecked,
  handleOpenEditModal,
}: Columns) => {
  return [
    {
      title: (
        <div className="ps-3.5">
          <Checkbox
            title={'Select All'}
            onChange={handleSelectAll}
            checked={checkedItems.length === data.length}
            className="cursor-pointer"
          />
        </div>
      ),
      dataIndex: 'checked',
      key: 'checked',
      width: 30,
      render: (_: unknown, row: any) => (
        <div className="inline-flex ps-3.5">
          <Checkbox
            aria-label="ID"
            className="cursor-pointer"
            checked={checkedItems.includes(row.id)}
            {...(onChecked && { onChange: () => onChecked(row.id) })}
          />
        </div>
      ),
    },
    {
      title: <HeaderCell title="No" />,
      dataIndex: 'id',
      key: 'id',
      width: 30,
      render: (id: string) => <Text>{id}</Text>,
    },
    {
      title: <HeaderCell title="svcCode" />,
      dataIndex: 'svcCode',
      key: 'id',
      width: 130,
      render: (id: string) => <Text>{id}</Text>,
    },
    {
      title: <HeaderCell title="svc_name" />,
      dataIndex: 'svc_name',
      key: 'id',
      width: 150,
      render: (id: string) => <Text>{id}</Text>,
    },
    {
      title: <HeaderCell title="svcSign" />,
      dataIndex: 'svcSign',
      key: 'id',
      width: 150,
      render: (svcSign: string) => <Text>{svcSign}</Text>,
    },
    {
      title: (
        <HeaderCell
          title="서비스 구분"
          sortable
          ascending={
            sortConfig?.direction === 'asc' && sortConfig?.key === 'svcCategory'
          }
        />
      ),
      dataIndex: 'svcCategory',
      key: 'svcCategory',
      onHeaderCell: () => onHeaderCellClick('svcCategory'),
      width: 100,
      render: (svcCategory: string) => <Text>{svcCategory}</Text>,
    },
    {
      title: (
        <HeaderCell
          title="사용 구분"
          sortable
          ascending={
            sortConfig?.direction === 'asc' &&
            sortConfig?.key === 'svgUsageCategory'
          }
        />
      ),
      dataIndex: 'svgUsageCategory',
      key: 'svgUsageCategory',
      onHeaderCell: () => onHeaderCellClick('svgUsageCategory'),
      width: 100,
      render: (svgUsageCategory: string) => <Text>{svgUsageCategory}</Text>,
    },
    {
      title: <></>,
      dataIndex: 'action',
      key: 'action',
      width: 60,
      render: (_: string, row: any) => (
        <div className="flex items-center justify-end gap-2">
          <Tooltip content="수정">
            <ActionIcon
              size="sm"
              variant="outline"
              aria-label={'Delete Item'}
              className="cursor-pointer hover:!border-gray-900 hover:text-gray-700 px-1"
              onClick={() => {
                handleOpenEditModal(row);
              }}
            >
              <MdModeEdit className="h-4 w-4" />
            </ActionIcon>
          </Tooltip>
          <RenderAction row={row} onDeleteItem={onDeleteItem} />
        </div>
      ),
    },
  ];
};
