import React, { FC, useContext } from 'react';
import {
  BrowserRouter, Route, Redirect, RouteProps,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import 'antd/dist/antd.css';
import './App.css';
import Main from './pages/Main/Main';
import { client } from './apollo';
import { ALLOWED_USERS, AuthContext, AuthContextProvider } from './context/auth';
import Lector from './pages/Lector/Lector';
import Gamezone from './pages/Gamezone/Gamezone';
import Sandbox from './pages/Sandbox/Sandbox';
import MasterClasses from './pages/MasterClasses/MasterClasses';
import Consultations from './pages/Consultations/Consultations';
import Cinema from './pages/Cinema/Cinema';

const ProtectedRoute: FC<RouteProps> = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  const hasAccess = Boolean(user) && ALLOWED_USERS.some(id => user?.id === id);

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
          <div className="App">
            <Route exact path="/" component={Main} />
            <ProtectedRoute exact path="/lector" component={Lector} />
            <ProtectedRoute exact path="/gamezone" component={Gamezone} />
            <ProtectedRoute exact path="/master-classes" component={MasterClasses} />
            <ProtectedRoute exact path="/sandbox" component={Sandbox} />
            <ProtectedRoute exact path="/consultations" component={Consultations} />
            <ProtectedRoute exact path="/cinema" component={Cinema} />
          </div>
        </BrowserRouter>
      </AuthContextProvider>
    </ApolloProvider>

  );
}

export default App;
