import React, { useContext } from "react";
import StartOptions from "../components/StartOptions";
import PokemonCard from "../components/PokemonCard";
import { useNavigate } from "react-router-dom";
import ThemeContextProvider from "../store/contexts/themeContextProvider";

interface HomePageProps {
  language: string;
  theme: string;
}

const HomePage: React.FC<HomePageProps> = () => {
  let navigate = useNavigate();
  const { themeSwitchHandler } = useContext(ThemeContextProvider as any);

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    if (form.themeMode.value === "Dark") {
      themeSwitchHandler();
    }

    console.log(
      `Submited with ${form.language.value} and ${form.themeMode.value}`
    );

    setTimeout(() => {
      navigate(`/arena`);
    }, 500);
  };

  return (
    <>
      <h1>Hello world - Homepage</h1>
      <StartOptions actionOnSubmit={onFormSubmit}></StartOptions>
      <PokemonCard />
    </>
  );
};

export default HomePage;
