import styled from "styled-components";
import { useContext } from "react";
import ThemeContext from "../store/contexts/themeContext/themeContext";
import PokemonCardArena from "../components/PokemonCardArena";

const ArenaPage = () => {
  const values = useContext(ThemeContext);

  return (
    <>
      <StyledPageWrapper>
        <h1>Hello world - Arena Page</h1>

        <StyledDivWrapper
            className={`arena-page__background--${
              values.isDarkMode === true ? "night" : "light"
            }`}>
            
            <section className="arena-page__stadium--player--a">
              <PokemonCardArena isPokemonA={true}></PokemonCardArena>
            </section>
            
            <section className="arena-page__stadium--player--b">
              <PokemonCardArena isPokemonA={false}></PokemonCardArena>
            </section>
        </StyledDivWrapper>
      </StyledPageWrapper>
    </>
  );
};

export default ArenaPage;

const StyledPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 0 2rem;

  .arena-page__stadium--player {
    display: flex;
    
    &--a {
    align-items: flex-start;
    background-color: grey;
    }
    
    &--b {
    align-items: flex-end;
    background-color: yellow;
    }
  }
`;

const StyledDivWrapper = styled.div`
  .arena-page__background--night {
    color: #fff;
    background-color: #333232;
    width: 100vw;
    height: 100vh;
  }
  .arena-page__background--light {
    color: #000;
    background-color: #e5e5e5;
    width: 100vw;
    height: 100vh;
  }
`;
