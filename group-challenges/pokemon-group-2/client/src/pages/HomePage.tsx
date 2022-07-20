import styled from "styled-components";
import React, { useContext } from "react";
import StartOptions from "../components/StartOptions";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../store/contexts/themeContext/themeContext";

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
        <Heading>Pokémon</Heading>
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

const Heading = styled.h1`
  font-size: 42px;
  margin-top: 5px;
  display: inline;
  color: #ccd5ae;
  letter-spacing: 3px;
  text-shadow: 0 0 2px black, 0 0 12px #d4a373;
  vertical-align: super;
`
