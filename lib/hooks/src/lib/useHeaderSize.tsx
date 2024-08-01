import { useEffect, useState } from 'react';

export const useHeaderSize = () => {
  const [headerSize, setHeaderSize] = useState<number>(0);

  useEffect(() => {
    const header = document.querySelector('header');
    setHeaderSize(header?.offsetHeight || 0);
  }, []);

  return headerSize;
};
