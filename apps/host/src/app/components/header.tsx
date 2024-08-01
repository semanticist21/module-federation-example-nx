import { RandomValueService } from '@federation-react/query';
import { useUserStore } from '@federation-react/store';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  // store
  const { username, setUsername } = useUserStore();

  // router
  const { state } = useLocation();

  // query
  const { data } = useQuery({
    ...RandomValueService.getRandomOptions(),
    enabled: false,
  });

  return (
    <header
      id="app-header"
      className="w-full text-lg text-white fixed top-0 px-6 py-2 gap-4"
    >
      <ul className="flex items-center gap-4">
        <li>
          <a href="/home">HOME</a>
        </li>
        <li>
          <a href="/store">STORE</a>
        </li>
        <li>
          <a href="/ui">UI</a>
        </li>
        <div className="flex items-center gap-2 mx-auto">
          <li className="ml-auto flex gap-4 items-center bg-green-700 rounded-md p-2 text-sm">
            현재 PARAMS: {JSON.stringify(state)}
          </li>
          <li className="ml-auto flex gap-4 items-center bg-teal-700 rounded-md p-2 text-sm">
            QUERY: {JSON.stringify(data)}
          </li>
        </div>
        <li className="ml-auto flex gap-4 items-center">
          {username && (
            <>
              <span className="text-sm">{username}님 안녕하세요!</span>
              <button onClick={() => setUsername('')}>LOGOUT</button>
            </>
          )}
          {!username && (
            <button onClick={() => setUsername('anonymous')}>LOGIN</button>
          )}
        </li>
      </ul>
    </header>
  );
};
