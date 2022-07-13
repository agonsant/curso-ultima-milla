import React, {useContext, useState} from 'react';
import { useNavigate } from "react-router";
import { ThemeContext } from '../store/context/ThemeContext';

import "./HomePage.scss";

const HomePage: React.FC = (): JSX.Element => { 
  const {isNightModeOn} = useContext(ThemeContext);
  const [userData, setUserData] = useState<{name: string, language: string}|null>(null);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>) => {
    setUserData( event.target.value );  
  }; 

  const onSubmitData = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("userData", userData);
      navigate(`/arena`);
  };
    
  return (
      <div className={`"home-page" ${isNightModeOn ? "background-night" : "background-light"}`}>
        <h1 className="home-page__title"> Welcome to the Pokemon Game </h1>
        <form className="home-page__form" onSubmit={onSubmitData}>
            <div className="home-page__user home-page__item"> 
            <input 
                type="text" 
                id="name"
                autoComplete="off"
                value={userData?.name}
                onChange={handleChange}
                placeholder="Enter your name"
            />
            </div>  
            <div className="home-page__languages home-page__item">
            <input 
                type="text"
                id="language"
                autoComplete="off"
                value={userData?.language}
                onChange={handleChange}
                placeholder="Enter language"
            /> 
            </div>
            <div className="home-page__item">
            <button type="submit" > Start the game  </button>
            </div>
        </form>
      </div>
  )
};

export default HomePage;