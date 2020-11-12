import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
// @ts-ignore
import localization from 'moment/locale/ru';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.sass';

moment.updateLocale('ru', localization);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
