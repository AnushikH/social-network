import React, { Component } from "react";
import MyPosts from "./myposts";
import {AddPostsActionCreator, UpdateNewTextsActionCreator} from '../../../redux/profile-reducer'

class MyPostsContainer extends Component {
    newPost = React.createRef()

addPost = () => {
    this.props.dispatch(AddPostsActionCreator());
    // this.props.profile.newPostsText = '';
}
myPostsContnet = () => {
    this.props.dispatch(UpdateNewTextsActionCreator(newPosts));
}

  render() {
    return <MyPosts  addPost={this.addPost} myPostsContnet={this.myPostsContnet} profile={this.props.profile}/>
  }
}

export default MyPostsContainer;
