import { RandomValueService } from '@federation-react/query';
import { useUserStore } from '@federation-react/store';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import TextUi from 'lib/ui/src/lib/text/text';

const RemotePage = () => {
  // store
  const { username } = useUserStore();

  // router
  const navigate = useNavigate();

  // query
  const { data, refetch, isPending } = useQuery(
    RandomValueService.getRandomOptions()
  );

  return (
    <div className="size-full flex flex-col items-center justify-center gap-4 text-white">
      <TextUi />
      <p>
        {username && `안녕하세요! ${username}`}
        {!username && `로그인 해주세요`}
      </p>
      <button
        className="font-bold"
        onClick={() =>
          navigate('/home', {
            state: {
              from: 'remote1',
            },
          })
        }
      >
        집으로(Router 테스트용)
      </button>
      <div className="flex gap-2 items-center">
        <div className="rounded-md bg-gray-600 p-2">
          {isPending && <p>로딩중...</p>}
          {data && <p>{data}</p>}
        </div>
        <button onClick={() => refetch()}>Refetch!!</button>
      </div>
    </div>
  );
};

export default RemotePage;
