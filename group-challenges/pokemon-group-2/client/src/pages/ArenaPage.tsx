import styled from "styled-components";
import ThemeContext from "../store/contexts/themeContext/themeContext";
import { useContext } from "react";
import PokemonContext from "../store/contexts/pokemonContext/pokemonContext";
import PokemonCardArena from "../components/PokemonCardArena";
import AttackBox from "../components/AttackBox";

const ArenaPage = () => {
  // const themeValues = useContext(ThemeContext);
  const { pokemonA, pokemonB } = useContext(PokemonContext);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <MainContainerPage className={`arena-page__background--${
          isDarkMode ? "night" : "light"
        }`}>
        <Heading>Pokemon Arena</Heading>
        <StyledPageWrapper
          className={`arena-page__background--${
            isDarkMode ? "night" : "light"
          }`}
        >
          <TwoCardsContainer>
            <section className="arena-page__stadium--player--b">
              <PokemonCardArena
                pokemon={pokemonB}
                isPokemonA={false}
                ></PokemonCardArena>
            </section>
            <section className="arena-page__stadium--player--a">
              <PokemonCardArena
                pokemon={pokemonA}
                isPokemonA={true}
                ></PokemonCardArena>
            </section>
          </TwoCardsContainer>
          <AttackBox></AttackBox>
        </StyledPageWrapper>
      </MainContainerPage>
    </>
  );
};

export default ArenaPage;

const MainContainerPage = styled.div`
  .arena-page__background--night {
    background-color: #353232;
    min-width: 100vw;
    min-height: 100vh;
  }

  .arena-page__background--light {
    background-color: #e5e5e5;
    min-width: 100vw;
    min-height: 100vh;
  }
`

const Heading = styled.h1`
  font-size: 42px;
  color: #ccd5ae;
  letter-spacing: 3px;
  text-shadow: 0 0 2px black, 0 0 12px #d4a373;
  text-align: center;
`

const StyledPageWrapper = styled.section`
  margin: 0 auto;

  /* .arena-page__background--night {
    background-color: #353232;
    min-width: 100vw;
    height: auto;
    display: flex;
  }
  .arena-page__background--light {
    background-color: #e5e5e5;
    min-width: 100vw;
    min-height: 100vh;
  } */
  .arena-page__stadium--player {
    display: flex;
    &-- {
      // background-color: blue;
    }
    &--b {
      // background-color: green;
    }
  }
`;

const TwoCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`
