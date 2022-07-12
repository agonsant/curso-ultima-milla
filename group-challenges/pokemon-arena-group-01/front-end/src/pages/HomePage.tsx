import React from 'react';
import { useNavigate } from "react-router";

import "./HomePage.css";

const HomePage: React.FC = (): JSX.Element => {
  const navigate=useNavigate();

  const startGameHandler = (event: React.FormEvent) => {
      event.preventDefault();
      navigate(`/arena`);
  };
    
  return (
    <div className="home-page">
      <h1 className="home-page__title"> Home Page </h1>
      <form className="home-page__form" onSubmit={startGameHandler}>
        <legend> Please choose language:  </legend>
        <div className="home-page__languages">
            <input 
              id="English" 
              type="radio"
              name="language"
              value="English"
              defaultChecked
            /> 
            <label htmlFor="English">English</label>

            <input 
              id="Spanish" 
              type="radio"
              name="language"
              value="Spanish"
            /> 
            <label htmlFor="Spanish">Spanish</label>
        </div>
        <div>
          <button type="submit" > Start the game  </button>
        </div>
      </form>
    </div>
  )
};

export default HomePage;