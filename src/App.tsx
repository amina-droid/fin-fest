import React, { FC, useContext } from 'react';
import {
  BrowserRouter, Route, Redirect, RouteProps,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import 'antd/dist/antd.css';
import './App.css';
import Main from './pages/Main/Main';
import { client } from './apollo';
import { AuthContext, AuthContextProvider } from './context/auth';
import Lector from './pages/Lector/Lector';

const ProtectedRoute: FC<RouteProps> = ({ component: Component, ...rest }) => {
  const { token } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={
        // @ts-ignore
        props => (!token ? <Redirect to="/" /> : <Component {...props} />)
      }
    />
  );
};

function App() {
  return (
    <AuthContextProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={Main} />
            <ProtectedRoute exact path="/lector" component={Lector} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    </AuthContextProvider>
  );
}

export default App;
