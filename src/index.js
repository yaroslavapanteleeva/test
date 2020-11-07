import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {createStore, applyMiddleware, compose}  from 'redux'
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './redux/Reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {getFirebase, ReactReduxFirebaseProvider, reactReduxFirebase, reduxFirebase} from 'react-redux-firebase'
import firebase from './config/firebase'
import {createFirestoreInstance, getFirestore, reduxFirestore} from 'redux-firestore'


const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})));


const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
