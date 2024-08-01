import * as React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Main } from './components/main';

const RemotePage = React.lazy(() =>
  import('remote1/Module').then((module) => ({ default: module.RemotePage }))
);
const Remote2Page = React.lazy(() =>
  import('remote2/Module').then((module) => ({ default: module.RemotePage2 }))
);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div className="w-dvw h-dvh">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="store" element={<RemotePage />} />
            <Route path="ui" element={<Remote2Page />} />
          </Route>
        </Routes>
      </div>
    </React.Suspense>
  );
}

export default App;
