import React, { Component } from "react";
import Messages from "./messages/messages";
import DialogContnt from "./dialogContent/dialogContent";
import dialogs from "./dialogs.module.css";
import {UpdateMessagesCreator, SendMessagesCreator} from '../../redux/dialog-reducer';

class Dialogs extends Component {
  messageValue = React.createRef(); 
  uodateMessages = () => {
   let body = this.messageValue.current.value;
   this.props.dispatch(UpdateMessagesCreator(body));
  }
  newMessage = () => {
   this.props.dispatch(SendMessagesCreator());
  }


  render() {

    return (
      <div className="col-lg-12 row bg-light mx-0 py-4">

        <div className="col-lg-4 border-right">
          <h4 className="text-dark font-weight-light">DIALOGS</h4>
          <ul className={dialogs.dialogsContent}>
            {this.props.dialogContent.map(dialog => (
              <DialogContnt key={dialog.id} name={dialog.name} id={dialog.id} />
            ))}
          </ul>
        </div>
        <div className="col-lg-8">
          {this.props.messagesContent.map(message => (
            <Messages
              key={message.id}
              messages={message.message}
              name={message.name}
            />
          ))}
          <div className="col-lg-10 p-4">
            <textarea value={this.props.newMessageText} onChange={this.uodateMessages} ref={this.messageValue} name="" id="" className="w-100 rounded bg-light" rows="5"/>
            <button onClick={this.newMessage} className="ml-auto bg-success d-block border-0 py-2 px-3 font-weight-bold mt-3 text-white">
              Send Message
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialogs;
