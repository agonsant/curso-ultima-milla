import styled from "styled-components";
import ThemeContext from "../store/contexts/themeContext/themeContext";
import { useContext } from "react";
import PokemonContext from "../store/contexts/pokemonContext/pokemonContext";
import PokemonCardArena from "../components/PokemonCardArena";

const ArenaPage = () => {
  const themeValues = useContext(ThemeContext);
  const { pokemonA, pokemonB, pokemonAttack } = useContext(PokemonContext);

  return (
    <>
      <h1>Hello world - Arena Page</h1>
      <StyledPageWrapper
        className={`arena-page__background--${
          themeValues.isDarkMode ? "night" : "light"
        }`}
      >
        <section className="arena-page__stadium--player--a">
          <PokemonCardArena
            pokemon={pokemonA}
            isPokemonA={true}
          ></PokemonCardArena>
        </section>

        <section className="arena-page__stadium--player--b">
          <PokemonCardArena
            pokemon={pokemonB}
            isPokemonA={false}
          ></PokemonCardArena>

          <p>Attacks:</p>
          <ul>
            {pokemonB.moves.map(
              (movement, index: any): JSX.Element => (
                <li
                  key={index}
                  className="arena-page__menu-attacks__item"
                  onClick={() =>
                    pokemonAttack(
                      `https://pokeapi.co/api/v2/move/${index + 1}/`
                    )
                  }
                >
                  {movement.move.name}
                </li>
              )
            )}
          </ul>
        </section>
      </StyledPageWrapper>
    </>
  );
};

export default ArenaPage;

const StyledPageWrapper = styled.section`
  .arena-page__background--night {
    background-color: #353232;
    min-width: 100vw;
    height: auto;
  }
  .arena-page__background--light {
    background-color: #e5e5e5;
    min-width: 100vw;
    min-height: 100vh;
  }
  .arena-page__stadium--player {
    display: flex;
    &-- {
      // background-color: blue;
    }
    &--b {
      // background-color: green;
    }
  }
  .arena-page__menu-attacks__item {
    width: 300px;
    height: 100%;
    display: flex;
    border: 1px solid black;
  }
`;
