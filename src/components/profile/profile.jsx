import React, { Component } from "react";
import cover from "../../images/cover.jpg";
import profile from "./profile.module.css";
import MyPosts from "./myPosts/myPosts";
import Portfolio from "./portfolio/portfolio";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="bg-light">
        <div className="">
          <img src={cover} className={profile.cover + " w-100"} alt="" />
        </div>
        <Portfolio />
        {/* {console.log(this.props.profile)} */}
        <MyPosts dispatch={this.props.dispatch} profile={this.props.profile}/>
      
      </div>
    );
  }
}

export default Profile;
