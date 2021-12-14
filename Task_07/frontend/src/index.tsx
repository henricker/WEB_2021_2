import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { FirebaseContext } from './context/firebase'
import { Firebase } from './services/firebase.init';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);