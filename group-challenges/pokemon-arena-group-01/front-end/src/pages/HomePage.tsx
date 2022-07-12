import React, {useState} from 'react';
import { useNavigate } from "react-router";
import { UserContext } from '../store/context/userContext';

import "./HomePage.css";

const HomePage: React.FC = (): JSX.Element => {
  const initialFormData = {
    name: "",
    language: "",  
  };  

  const [formData, setFormData] = useState<{name: string, language: string}>(initialFormData);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>) => {
    setFormData( event.target.value );  
  }; 

  const onSubmitData = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("formData", formData);
      navigate(`/arena`);
  };
    
  return (
    <UserContext.Provider value={formData}>
      <div className="home-page">
        <h1 className="home-page__title"> Welcome to the Pokemon Game </h1>
        <form className="home-page__form" onSubmit={onSubmitData}>
            <div className="home-page__user home-page__item"> 
            <input 
                type="text" 
                id="name"
                autoComplete="off"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
            />
            </div>  
            <div className="home-page__languages home-page__item">
            <input 
                type="text"
                id="language"
                autoComplete="off"
                value={formData.language}
                onChange={handleChange}
                placeholder="Enter language"
            /> 
            </div>
            <div className="home-page__item">
            <button type="submit" > Start the game  </button>
            </div>
        </form>
      </div>
    </UserContext.Provider>
  )
};

export default HomePage;