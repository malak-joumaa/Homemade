import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import orderReducer from "./orderReducer";

const reducers = combineReducers({
  user: userReducer,
  login: loginReducer,
  order: orderReducer,
});

export default reducers;
