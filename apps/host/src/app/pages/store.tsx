import { useUserStore } from '@federation-react/store';

export const Store = () => {
  const { username } = useUserStore();

  return (
    <div className="size-full">
      <h1>{username}</h1>
    </div>
  );
};
