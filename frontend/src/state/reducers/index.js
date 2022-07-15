import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";

const reducers = combineReducers({
  user: userReducer,
  login: loginReducer,
});

export default reducers;
