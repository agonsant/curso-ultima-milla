import React from "react";

import { UserContext } from '../store/context/userContext';

const ArenaPage: React.FC = () => {
  const userData = React.useContext(UserContext);
  return (
    <>
      <h1> Arena Page </h1>
      <p> Player's name: {userData?.name} </p>
      <p> Game language: {userData?.language} </p>
    </>
  )
};

export default ArenaPage;