import { useUserStore } from '@federation-react/store';

const RemotePage = () => {
  const { username } = useUserStore();

  return (
    <div className="size-full flex items-center justify-center">
      <div className="text-white">안녕하세요! {username}</div>
    </div>
  );
};

export default RemotePage;
