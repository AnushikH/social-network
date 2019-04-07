import React, { Component } from "react";
import avatar from "../../../images/avatar.png";

class Messages extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-10 row mx-0 py-3">
        <div className="col-lg-2 text-center">
          <img src={avatar} className="rounded-circle" width="70px" alt="" />
          <p className="mt-2">{this.props.name}</p>
        </div>
        <div className="col-lg-10">
          <div className="rounded border p-3">
            <p>{this.props.messages}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
