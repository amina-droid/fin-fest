import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import './App.css';
import Main from "./pages/Main/Main";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Route exact path="/" render={() => <Main />} />
        </div>
      </BrowserRouter>

  );
}

export default App;
