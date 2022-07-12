import React from 'react';

import "./HomePage.css";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div className="home-page">
      <h1 className="home-page__title">Home Page</h1>
      <form>
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
          <button type="submit"> Submit </button>
        </div>
      </form>
    </div>
  )
};

export default HomePage;