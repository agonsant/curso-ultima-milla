import React from "react";
import StartOptions from "../components/StartOptions";

interface HomePageProps {
  language: string;
  theme: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ language, theme }) => {
  return (
    <>
      <h1>Hello world - Homepage</h1>
      <StartOptions language={language} theme={theme}></StartOptions>
    </>
  );
};

export default HomePage;
