import React, { Component } from 'react';
import './App.css';
import Header  from './components/header/header';
import Profile  from './components/profile/profile';
import Sidebar  from './components/sidebar/sidebar';
import Dialogs from './components/dialogs/dialogs';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
       <Header />
       <div className="col-lg-12 row mx-0 px-0 borderTop">
          <div className="col-lg-2 px-0">
              <Sidebar />
          </div>
          <div className="col-lg-10 px-0">

          <Route path={'/profile'} render={() => <Profile profile={this.props.state.profile} dispatch={this.props.dispatch}/>}/>
          <Route path={'/dialogs'} render={() => <Dialogs 
              dispatch={this.props.dispatch} 
              dialogContent={this.props.state.dialog.dialogContent} 
              messagesContent={this.props.state.dialog.messagesContent} 
              newMessageText={this.props.state.dialog.newMessageText}/>}/>
          </div>
       </div>
      </BrowserRouter>
    );
  }
}

export default App;
