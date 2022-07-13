import { useState } from "react"
import { UserContext} from "./userContext";

const UserContextProvider = ({children}:any) => {
  const [user, setUser] = useState({name:"", language:""})
  const {name, language}=user;  
  return (
    <UserContext.Provider 
      value={ {name, language, setUser} }
    >
      {children}    

    </UserContext.Provider>
  )
};

export default UserContextProvider;