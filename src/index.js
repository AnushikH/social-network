
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


let rerenderReactAPP = () =>{
    ReactDOM.render(<App 
        state={store.getState()} 
        dispatch={store.dispatch.bind(store)}/>, 
    document.getElementById('root'));
}

rerenderReactAPP(store.getState());

store.subscribe(()=>{
    let state = store.getState()
    rerenderReactAPP(state);
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

