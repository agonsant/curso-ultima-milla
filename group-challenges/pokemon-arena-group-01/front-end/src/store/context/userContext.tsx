import React from "react";

//an user must have a name and a language
export interface IUser {
  name: string,
  language: string,
};

const defaultUser = null;
export const UserContext = React.createContext<IUser | null>(defaultUser);