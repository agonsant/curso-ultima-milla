import React from "react";

//an user must have a name and a language

export interface IUser {
  name: string;
  language: string;
}
export interface IUserContext extends IUser {
  setUser: (user: IUser) => void;
}

export const UserContext = React.createContext<IUserContext>({
  name: "",
  language: "",
  setUser: () => {},
});
