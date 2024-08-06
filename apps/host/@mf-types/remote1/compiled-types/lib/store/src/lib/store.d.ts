interface UserStore {
    username: string;
    setUsername: (username: string) => void;
}
export declare const useUserStore: import("zustand").UseBoundStore<import("zustand").StoreApi<UserStore>>;
export {};
