import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  ReactReduxFirebaseProvider } from "react-redux-firebase";
import { Provider } from "react-redux";

import {store,rrfProps,AuthIsLoaded} from './store/store'
ReactDOM.render(
  <Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
  <AuthIsLoaded>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthIsLoaded>
  </ReactReduxFirebaseProvider>
  </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
