'use client';

import { useState, useMemo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const filterData = <T extends Record<string, any>>(
  array: T[],
  filterKeys: string[]
) => {
  return array.filter((obj) => {
    return Object.values(obj).some((key) => filterKeys.includes(key));
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useColumn = <T extends Record<string, any>>(columnsData: T[]) => {
  const [checkedColumns, setCheckedColumns] = useState(
    columnsData.map((column) => column.dataIndex)
  );

  const visibleColumns = useMemo(
    () => filterData(columnsData, checkedColumns),
    [columnsData, checkedColumns]
  );

  return { visibleColumns, checkedColumns, setCheckedColumns };
};
