import { QueryClient } from '@tanstack/react-query';
export declare const client: QueryClient;
export declare const RandomValueService: {
    getRandomOptions: () => import("@tanstack/react-query").UseQueryOptions<number, Error, number, string[]> & {
        initialData?: undefined;
    } & {
        queryKey: import("@tanstack/react-query").DataTag<string[], number>;
    };
};
