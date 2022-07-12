import React from "react";

export interface IUserContext {
  name: string,
  language:string,
};
export const UserContext = React.createContext<IUserContext>({name:"", language:""});