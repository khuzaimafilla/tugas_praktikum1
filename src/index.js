import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import App from './App';
import reportWebVitals from './reportWebVitals';
import No1 from './pages/no1'
import No2 from './pages/no2'
import No3 from './pages/no3'
import No4desimal from './pages/no4desimal'
import No4biner from './pages/no4biner'
import No4hexadesimal from './pages/no4hexadesimal'
import No4oktal from './pages/no4oktal'


ReactDOM.render(
  <React.StrictMode>
    <No1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();