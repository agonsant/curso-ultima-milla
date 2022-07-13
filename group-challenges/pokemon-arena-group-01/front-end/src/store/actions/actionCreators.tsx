import actionTypes from "./actionTypes";
import { IUser } from "../context/userContext";

export const createUserAction = (user:IUser) => ({
  type: actionTypes.createUser,
  payload: user,
});