import {combineReducers} from "redux";
import shopReducer from './shopping/shopping-reducers'
import authReducer from "./shopping/auth/auth-reducers";
const rootReducer = combineReducers({
  shop: shopReducer,
  auth: authReducer,
});
export default rootReducer;