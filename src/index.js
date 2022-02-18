import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import AppRouter from './routers/AppRouter';

import configureStore from './redux/configureStore'
import { Provider } from 'react-redux';

import {onAuthStateChanged, getAuth, onSnapshot, coll} from './firebase/FirebaseConfig'
import {loginAction, logoutAction} from './redux/actions'


const store = configureStore();

store.subscribe(()=>{
  console.log("===== Store Changed ====");
  console.log(store.getState());
  console.log("------------------------");
});

onAuthStateChanged(getAuth(), (user) => {
  if (user) {
      console.log("User Login: ", user.uid);
      store.dispatch(loginAction(user.uid, user.photoURL));
  } else {
     
      console.log("User Logout.");
      store.dispatch(logoutAction());
      
  }
  renderApp();
});


let isRendered = false;
const renderApp = () => {
    if(!isRendered) {
        // Provider ile App routerdan erişile tüm componentlere veriler aktarıla biliniyor. Veriler store dan alınıyor.
        ReactDOM.render(
            <Provider store={store}>
                <AppRouter />
            </Provider>, 
            document.getElementById('root')
        );
        isRendered = true;
    }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
