import { combineReducers, createStore } from "redux";
import DialogReducer from "./dialog-reducer";
import ProfileReducer from "./profile-reducer";

let reducers = combineReducers({
  dialog: DialogReducer,
  profile: ProfileReducer
});

let store = createStore(reducers);

export default store;
