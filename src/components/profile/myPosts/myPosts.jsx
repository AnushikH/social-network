import React, { Component } from "react";
import Post from "./posts/post";
import {AddPostsActionCreator, UpdateNewTextsActionCreator} from '../../../redux/profile-reducer'

class MyPosts extends Component {
    newPost = React.createRef()

addPost = () => {
    this.props.dispatch(AddPostsActionCreator());
    this.props.profile.newPostsText = '';
}
myPostsContnet = () => {
    let newPosts = this.newPost.current.value; 
    this.props.dispatch(UpdateNewTextsActionCreator(newPosts));
}

  render() {
    return (   
      <React.Fragment>
        <div className="p-5">
          <h2>My Posts</h2>
          <textarea value={this.props.profile.newPostsText} onChange={this.myPostsContnet} ref={this.newPost} name="" id="" rows="5" className="bg-light w-100" />
          <button onClick={this.addPost} className="ml-auto bg-success d-block border-0 py-2 px-3 font-weight-bold mt-3 text-white">
            Send Post
          </button>
        </div>

        {this.props.profile.posts.map(post => <Post key={post.id} message={post.message} likeCounts={post.likeCounts} />)}
      </React.Fragment>
    );
  }
}

export default MyPosts;
