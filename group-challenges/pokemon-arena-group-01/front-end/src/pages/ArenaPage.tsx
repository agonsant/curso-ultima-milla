import React from "react";

interface ArenaPageProps {
  language: string;  
}

const ArenaPage: React.FC<ArenaPageProps> = props => {
    return (
      <>
        <h1> Arena Page </h1>
        <p> Game language: {props.language} </p>
      </>
    )
};

export default ArenaPage;