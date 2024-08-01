import { QueryClient, queryOptions } from '@tanstack/react-query';
import { getDelayedRandom } from './api';

export const client = new QueryClient({});

export const RandomValueService = {
  getRandomOptions: () => {
    return queryOptions({
      queryKey: ['all'],
      queryFn: getDelayedRandom,
    });
  },
};
