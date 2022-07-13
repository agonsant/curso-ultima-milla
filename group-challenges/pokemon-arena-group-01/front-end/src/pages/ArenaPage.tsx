import React, { useContext } from "react";
import { UserContext } from '../store/context/userContext';

const ArenaPage: React.FC = (): JSX.Element => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1> Arena Page </h1>
      <p> Player's name: {user?.name} </p>
      <p> Game language: {user?.language} </p>
    </div>
  )
};

export default ArenaPage;