import DialogReducer from './dialog-reducer'
import ProfileReducer from './profile-reducer'


let store = {
  _state: {
    dialog: {
      dialogContent: [
        { id: 1, name: "Andrea" },
        { id: 2, name: "Sofy" },
        { id: 3, name: "Jack" },
        { id: 4, name: "Dnay" },
        { id: 5, name: "Jany" }
      ],
      messagesContent: [
        { id: 1, message: "Hello how are you", name: "Andrea" },
        { id: 2, message: "Hello I'am fine and you?", name: "Me" }
      ],
      newMessageText: 'Your Messages here'
    },
    profile: {
      posts: [
        { id: 1, message: "Hello I am a ReactJs developer", likeCounts: 2 },
        { id: 2, message: "Hi I'am too", likeCounts: 20 },
        { id: 3, message: "Hi all, nice to meet you", likeCounts: 17 }
      ],
      newPostsText: "social-app"
    }
  },
  _callSubscriber(){
    console.log('State Changed');
  },
  getState(){
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action){
    this._state.dialog = DialogReducer(this._state.dialog,  action);
    this._state.profile = ProfileReducer(this._state.profile, action);
    this._callSubscriber(this._state)
  }
};


export default store;
window.store = store;