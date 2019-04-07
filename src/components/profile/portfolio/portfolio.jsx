import React, { Component } from "react";
import profileImage from "../../../images/profile-picture.jpg";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-12 row mx-0">
        <div className="col-lg-3 pt-4">
          <img src={profileImage} className="w-75 rounded-circle" alt="" />
        </div>
        <div className="col-lg-9 py-4">
          <h2 className="pb-3">My Name</h2>
          <h4>
            Dathe for Birth: <span>24</span>{" "}
          </h4>
          <h4>
            City: <span>Mexiko</span>
          </h4>
          <h4>
            Education: <span>BSU</span>
          </h4>
          <h4>
            Web Site: <span>www.mysite.com</span>
          </h4>
        </div>
      </div>
    );
  }
}

export default Portfolio;
