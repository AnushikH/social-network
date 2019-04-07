import React, { Component } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

class DialogContnt extends Component {
  state = {};
  render() {
    return (
      <li>
        <NavLink to={"/dialog/" + this.props.id}>{this.props.name}</NavLink>
      </li>
    );
  }
}

export default DialogContnt;
