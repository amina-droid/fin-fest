import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import 'antd/dist/antd.css';
import './App.css';
import Main from './pages/Main/Main';
import { client } from './apollo';
import { useAuth, AuthContext } from './context/auth';

function App() {
  const authContext = useAuth();

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authContext}>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" render={() => <Main />} />
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
