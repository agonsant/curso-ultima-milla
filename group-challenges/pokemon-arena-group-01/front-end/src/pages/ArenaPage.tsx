import React from "react";

import { UserContext } from '../store/context/userContext';

const ArenaPage: React.FC = (): JSX.Element => {
//   const arenaUserData = React.useContext(UserContext);
  return (
    <UserContext.Consumer>
      { appContext => appContext && (
          <div>
            <h1> Arena Page </h1>
            <p> Player's name: {appContext.name} </p>
            <p> Game language: {appContext.language} </p>
          </div>
        )
      }
    </UserContext.Consumer>
  )
};

export default ArenaPage;