import React, {useContext} from 'react';
import { useNavigate } from "react-router";
import { UserContext } from '../store/context/userContext';

import "./HomePage.css";

const HomePage: React.FC = (): JSX.Element => { 
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmitData = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const user = { name: form.userName.value, language: form.language.value}
      setUser(user);
      navigate(`/arena`);
  };
    
  return (
      <div className="home-page">
        <h1 className="home-page__title"> Welcome to the Pokemon Game </h1>
        <form className="home-page__form" onSubmit={onSubmitData}>
            <div className="home-page__user home-page__item"> 
            <input 
                type="text" 
                id="name"
                name="userName"
                autoComplete="off"
                placeholder="Enter your name"
            />
            </div>  
            <div className="home-page__languages home-page__item">
            <input 
                type="text"
                id="language"
                name="language"
                autoComplete="off"
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