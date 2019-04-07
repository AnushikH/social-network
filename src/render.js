import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { addPosts } from './redux/state';
import { changePostText } from './redux/state';


export let rerenderReactAPP = (state) =>{
    ReactDOM.render(<App 
        state={state} 
        addPosts={addPosts}
        changePostText={changePostText}/>, 
    document.getElementById('root'));
}

