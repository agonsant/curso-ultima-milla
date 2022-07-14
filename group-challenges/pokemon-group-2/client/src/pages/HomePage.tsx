import styled from "styled-components";
import React, { useContext } from "react";
import StartOptions from "../components/StartOptions";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../store/contexts/themeContext";

interface HomePageProps {
  language: string;
  theme: string;
}

const HomePage: React.FC<HomePageProps> = () => {
  let navigate = useNavigate();
  const { themeSwitchHandler } = useContext(ThemeContext);

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    if (form.themeMode.value === "Dark Mode") {
      themeSwitchHandler(true);
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
      <Wrapper>
        <h1>Pokémon</h1>
        <StartOptions actionOnSubmit={onFormSubmit}></StartOptions>
      </Wrapper>
    </>
  );
};

export default HomePage;

const Wrapper = styled.section`
  min-height: 90vh;
  min-width: 90vw;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 0 1rem;
`;
