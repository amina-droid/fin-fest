import React, { FC, useContext } from 'react';
import {
  BrowserRouter, Route, Redirect, RouteProps,
} from 'react-router-dom';
import moment from 'moment';
import { ApolloProvider } from '@apollo/client';
import 'antd/dist/antd.css';
import './App.css';
import Main from './pages/Main/Main';
import { client } from './apollo';
import {
  ALLOWED_USERS, AuthContext, AuthContextProvider, DEADLINE,
} from './context/auth';
import Lector from './pages/Lector/Lector';
import Gamezone from './pages/Gamezone/Gamezone';
import Sandbox from './pages/Sandbox/Sandbox';
import MasterClasses from './pages/MasterClasses/MasterClasses';
import Consultations from './pages/Consultations/Consultations';
import Cinema from './pages/Cinema/Cinema';
import Shop from './pages/Shop/Shop';
import Fair from './pages/Fair/Fair';
import RoundTable from './pages/RoundTable/RoundTable';
import RouterScroll from './components/RouterScroll';

const ProtectedRoute: FC<RouteProps> = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  const current = moment();

  const hasAccess = Boolean(user)
    && (ALLOWED_USERS.some(id => user?.id === id)
    || current > DEADLINE);

  return (
    <Route
      {...rest}
      render={
        // @ts-ignore
        props => (!hasAccess ? <Redirect to="/" /> : <Component {...props} />)
      }
    />
  );
};

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <BrowserRouter>
          <RouterScroll />
          <div className="App">
            <Route exact path="/" component={Main} />
            <ProtectedRoute exact path="/lector" component={Lector} />
            <ProtectedRoute exact path="/gamezone" component={Gamezone} />
            <ProtectedRoute exact path="/master-classes" component={MasterClasses} />
            <ProtectedRoute exact path="/sandbox" component={Sandbox} />
            <ProtectedRoute exact path="/consultations" component={Consultations} />
            <ProtectedRoute exact path="/cinema" component={Cinema} />
            <ProtectedRoute exact path="/shop" component={Shop} />
            <ProtectedRoute exact path="/fair" component={Fair} />
            <ProtectedRoute exact path="/round-table" component={RoundTable} />
          </div>
        </BrowserRouter>
      </AuthContextProvider>
    </ApolloProvider>

  );
}

export default App;
