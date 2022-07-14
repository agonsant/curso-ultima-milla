import styled from "styled-components";
import { useContext } from "react";
import themeContextProvider from "../store/contexts/themeContextProvider";

const ArenaPage = () => {
  const { isDarkMode } = useContext(themeContextProvider as any);

  return (
    <>
      <StyledPageWrapper
        className={`"arena-page" ${
          isDarkMode
            ? "background-night text-night"
            : "background-light text-light"
        }`}
      ></StyledPageWrapper>
      <h1>Hello world - Arena Page</h1>
    </>
  );
};

export default ArenaPage;

const StyledPageWrapper = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 0 2rem;
  .background-night text-night {
    background-color: #000;
    color: white;
  }
  .background-light text-light {
    background-color: #fff;
    color: black;
  }
`;
