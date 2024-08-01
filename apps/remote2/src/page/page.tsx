import { useMemo, useState } from 'react';
import ControlledTable, {
  StatusField,
  useColumn,
  useTable,
} from '@federation-react/ui';
import {
  SERVICE_MOCK_DATA,
  serviceItemType,
  SVC_CATEGORY_OPTIONS,
  SVG_USAGE_CATEGORY_OPTIONS,
} from './data/data';
import { GetServiceColumns } from './columns/service.columns';

const filterState = {
  svcCategory: '',
  svgUsageCategory: '',
};

const Remote2Page = () => {
  // state props
  const [pageSize, setPageSize] = useState(7);

  // table props
  const {
    isLoading,
    isFiltered,
    tableData,
    currentPage,
    totalItems,
    handlePaginate,
    filters,
    updateFilter,
    searchTerm,
    handleSearch,
    sortConfig,
    handleSort,
    handleDelete,
    handleReset,
    handleSelectAll,
    handleRowSelect,
    setSelectedRowKeys,
    selectedRowKeys,
  } = useTable(SERVICE_MOCK_DATA, pageSize, filterState);

  const columns = useMemo(
    () =>
      GetServiceColumns({
        data: tableData,
        sortConfig,
        checkedItems: selectedRowKeys,
        onHeaderCellClick: (value: string) => ({
          onClick: () => {
            handleSort(value);
          },
        }),
        onDeleteItem: handleDelete,
        onChecked: handleRowSelect,
        handleSelectAll,
        handleOpenEditModal: (item: serviceItemType) => {
          // openModal({
          //   view: <ModalEdit type="edit" item={item} />,
          // });
        },
      }),
    [
      tableData,
      sortConfig,
      selectedRowKeys,
      handleDelete,
      handleRowSelect,
      handleSelectAll,
      handleSort,
      // openModal,
    ]
  );

  const { visibleColumns, checkedColumns, setCheckedColumns } =
    useColumn(columns);

  return (
    <div className="p-4 bg-gray-100">
      <div className="[&_.table-filter>div:first-child]:grow [&_.table-filter>div:first-child]:justify-between">
        <ControlledTable
          // paginatorClassName="pb-0"
          variant="modern"
          isLoading={isLoading}
          showLoadingText={true}
          data={tableData}
          scroll={{
            x: 1560,
          }}
          // @ts-expect-error onHeaderCell
          columns={visibleColumns}
          paginatorOptions={{
            pageSize,
            setPageSize,
            total: totalItems,
            current: currentPage,
            onChange: (page: number) => handlePaginate(page),
            pageSizeOptions: [7, 10, 20, 50, 100],
          }}
          filterOptions={{
            searchTerm,
            onSearchClear: () => {
              handleSearch('');
            },
            onSearchChange: (event) => {
              handleSearch(event.target.value);
            },
            hasSearched: isFiltered,
            columns,
            checkedColumns,
            setCheckedColumns,
          }}
          className="rounded-md border border-muted text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0"
          filterElement={
            <div className="flex gap-2">
              <StatusField
                dropdownClassName="!z-10"
                className="w-full min-w-[170px] @[35rem]:w-auto"
                placeholder="서비스"
                options={SVC_CATEGORY_OPTIONS}
                value={filters['svcCategory']}
                onChange={(value: string) => {
                  updateFilter('svcCategory', value);
                }}
                getOptionValue={(option: { value: any }) => option.value}
              />
              <StatusField
                dropdownClassName="!z-10"
                className="w-full @[35rem]:w-auto"
                placeholder="사용 구분"
                options={SVG_USAGE_CATEGORY_OPTIONS}
                value={filters['svgUsageCategory']}
                onChange={(value: string) => {
                  updateFilter('svgUsageCategory', value);
                }}
                getOptionValue={(option: { value: any }) => option.value}
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Remote2Page;
