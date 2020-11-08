import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import 'antd/dist/antd.css';
import './App.css';
import Main from './pages/Main/Main';
import { client } from './apollo';
import { AuthContextProvider } from './context/auth';

function App() {
  return (
    <AuthContextProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" render={() => <Main />} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    </AuthContextProvider>
  );
}

export default App;
