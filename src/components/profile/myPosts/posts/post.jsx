import React, { Component } from "react";
import profileImage from "../../../../images/profile-picture.jpg";

class Post extends Component {
  state = {};
  render() {
    return (
      <div className="py-2 col-lg-6">
        <div className="col-lg-12 row mx-0">
          <div className="col-lg-2 text-center">
            <img
              src={profileImage}
              className="rounded-circle"
              width="80px"
              alt=""
            />
          </div>
          <div className="col-lg-10 d-flex align-items-center">
            <h5>{this.props.message}</h5>
          </div>
        </div>
           <p className="text-center"><i className="fas fa-thumbs-up"></i> Like <span className="text-primary">{this.props.likeCounts}</span></p> 
      </div>
    );
  }
}

export default Post;
