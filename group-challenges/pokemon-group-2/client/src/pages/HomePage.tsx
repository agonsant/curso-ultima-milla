import React from "react";
import StartOptions from "../components/StartOptions";
import PokemonCard from "../components/PokemonCard";
import useAPI from "../hooks/useAPI";

interface HomePageProps {
  language: string;
  theme: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ language, theme }) => {
  const { getPokemonData, getPokemonImage } = useAPI();
  
  getPokemonData("1");
  getPokemonImage("1");
    
  return (
    <>
      <h1>Hello world - Homepage</h1>
      <StartOptions language={language} theme={theme}></StartOptions>
      <PokemonCard/>
    </>
  );
};

export default HomePage;
