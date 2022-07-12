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
    setFormData(event.currentTarget.id);  
    console.log(formData);
  }; 

  const startGameHandler = (event: React.FormEvent) => {
      event.preventDefault();
      navigate(`/arena`);
  };
    
  return (
    <UserContext.Provider value={formData}>
      <div className="home-page">
        <h1 className="home-page__title"> Home Page </h1>
        <form className="home-page__form" onSubmit={startGameHandler}>
            <div className="home-page__user home-page__item"> 
            <input 
                type="text" 
                id="name"
                className="home-page__name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
            />
            </div>  
            <div className="home-page__languages home-page__item">
            <input 
                type="text"
                id="language"
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