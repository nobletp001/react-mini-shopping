import *  as actionTypes from './auth-types';

export const logIn = () => {
  return {
    type: actionTypes.LOG_IN,
   
  };
};



export const logOut = () => {
  return {
    type: actionTypes.LOG_OUT,
  };
};