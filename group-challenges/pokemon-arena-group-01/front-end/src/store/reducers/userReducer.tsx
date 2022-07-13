import actionTypes from "../actions/actionTypes";
import {  IUser } from "../context/userContext";

const userReducer = (user:IUser, action={type:"", payload:""}) => {
  let newUser;

  if (action.type=== actionTypes.createUser) {
    newUser = {...user};
  } else {
    newUser = user;  
  }

  return newUser;
};

export default userReducer;