import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'


import { reduxFirestore, 
  getFirestore,
  createFirestoreInstance} 
  from "redux-firestore";
import {ReactReduxFirebaseProvider,getFirebase } from "react-redux-firebase";
import firebaseConfig from './config/FirebaseConfig'
import firebase from "firebase/app";

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
      reduxFirestore(firebase,firebaseConfig)
    )
  );
  
////////////////////////////
  const profileSpecificProps = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    enableRedirectHandling: false,
    resetBeforeLogin: false
  }
  ////////////////////////////


  const rrfProps = {
    firebase,
    config: firebaseConfig,
    ////////////////////////////
    config: profileSpecificProps,
    ////////////////////////////
    dispatch: store.dispatch,
    createFirestoreInstance
  };
  
ReactDOM.render(
  <Provider store={store} >
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
  



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
