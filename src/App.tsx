import { useApi, useAccount } from '@gear-js/react-hooks';
import { Routing } from 'pages';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Header, ApiLoader } from 'components';
import { withProviders } from 'hocs';
import { Landing } from 'pages/landing/Landing';
import { Home } from 'pages/home';


import 'App.css';

function Component() {
  // const { isApiReady } = useApi();
  // const { isAccountReady } = useAccount();

  // const isAppReady = isApiReady && isAccountReady;

  return (
    <>
        {/* <Header isAccountVisible={isAccountReady} />
        <main>{isAppReady ? <Routing /> : <ApiLoader />}</main> */}
      {/* <Landing />  */}
      <Home />
   
    </>
  );
}


export const App = withProviders(Component);
