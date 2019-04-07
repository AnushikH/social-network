const ADD_POSTS = 'ADD-POSTS';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState ={
    posts: [
        { id: 1, message: "Hello I am a ReactJs developer", likeCounts: 2 },
        { id: 2, message: "Hi I'am too", likeCounts: 20 },
        { id: 3, message: "Hi all, nice to meet you", likeCounts: 17 }
      ],
      newPostsText: "social-app"
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POSTS:
            let post = {
                id: 3,
                message: state.newPostsText,
                likeCounts: 4
            };
            state.posts.push(post);
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostsText = action.newPosts;
            return state;
        default:
            return state;
    }
}

export const AddPostsActionCreator = () => {
    return ({
        type: ADD_POSTS
    })
}
export const UpdateNewTextsActionCreator = (newPosts) => {
    return ({
        type: UPDATE_NEW_POST_TEXT,
        newPosts: newPosts
    })
}

export default ProfileReducer;