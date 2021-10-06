 
import * as actionTypes from "./auth-types";
 
 const INITIAL ={
      user:true
  }


const authReducer =(state=INITIAL, action)=>{
switch (action.type) {
  case actionTypes.LOG_IN:
    return {
        ...state,
      user: false,
    };

  case actionTypes.LOG_OUT:
    return {
        ...state,
      user: true,
    };
  default:
    return state;
}
}

export default authReducer