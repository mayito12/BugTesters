import { useApi, useAccount } from '@gear-js/react-hooks';
import { Routes, Route } from 'react-router-dom';
import { withProviders } from 'hocs';
import { Home } from 'pages/home';
import { Landing } from 'pages/landing/Landing';

import 'App.css';

function Component() {
  // const { isApiReady } = useApi();
  // const { isAccountReady } = useAccount();

  // const isAppReady = isApiReady && isAccountReady;

  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export const App = withProviders(Component);
