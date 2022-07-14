import styled from "styled-components";
import { useContext } from "react";
import ThemeContext from "../store/contexts/themeContext/themeContext";
import PokemonCard from "../components/PokemonCard";
import PokemonCardArena from "../components/PokemonCardArena";

const ArenaPage = () => {
  const values = useContext(ThemeContext);

  return (
    <>
      <StyledPageWrapper>
        <h1>Hello world - Arena Page</h1>
        <StyledDivWrapper>
          <div
            className={`background--${
              values.isDarkMode === true ? "night" : "light"
            }`}
          ></div>
          <PokemonCard></PokemonCard>
          <PokemonCardArena></PokemonCardArena>
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
  width: 100vw;
  height: 100vh;
`;

const StyledDivWrapper = styled.div`
  .background--night {
    color: fff;
    background-color: #333232;
    width: 100vw;
    height: 100vh;
  }
  .background--light {
    color: #000;
    background-color: #e5e5e5;
    width: 100vw;
    height: 100vh;
  }
`;
