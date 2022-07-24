import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import orderReducer from "./orderReducer";
import socketReducer from "./socketReducer";

const reducers = combineReducers({
  user: userReducer,
  login: loginReducer,
  order: orderReducer,
  socket: socketReducer,
});

export default reducers;
