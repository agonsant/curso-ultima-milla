import { useReducer } from "react"
import { UserContext} from "./userContext";
import userReducer from "../reducers/userReducer";

const UserContextProvider = ({children}:any) => {
  const [user] = useReducer(userReducer, {name:"", language:""});
    
  return (
    <UserContext.Provider 
      value={ user}
    >
      {children}    
    </UserContext.Provider>
  )
};

export default UserContextProvider;