import styled from "styled-components";

interface IStartOptions {
  actionOnSubmit: any;
}

const StartOptions: React.FC<IStartOptions> = ({ actionOnSubmit }) => {
  return (
    <>
      <StyledOptionsBox>
        <StyledImage
          className="home-page__image"
          src="images/gameboy_advanced-bg-preview.png"
          alt="Gameboy Advanced"
        />
        <StyledForm onSubmit={actionOnSubmit}>
          <p className="home-page__optionText--language">Language:</p>
          <div className="home-page__languages">
            <select id="language" name="language" defaultValue="English">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>

          <p className="home-page__optionText--theme">Theme:</p>
          <div className="home-page__theme">
            <select id="themeMode" name="themeMode" defaultValue="Light">
              <option value="Light Mode">Light Mode</option>
              <option value="Dark Mode">Dark Mode</option>
            </select>
          </div>
          <FormButton type="submit">Start</FormButton>
        </StyledForm>
      </StyledOptionsBox>
    </>
  );
};

export default StartOptions;

const StyledOptionsBox = styled.section`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  letter-spacing: 0.1em;
`;

const StyledImage = styled.img`
  width: 50rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 0;
`;

const StyledForm = styled.form`
  background-color: #e3e3e3;
  border-radius: 3px;
  border: 1px solid black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  top: -390px;
  height: 13rem;
  width: 18rem;
  text-align: center;
  font-family: "DotGothic16", sans-serif;
  z-index: 1;
  .home-page__languages {
    width: 100%;
    font-family: "DotGothic16", sans-serif;
  }
  .home-page__theme {
    width: 90%;
    font-family: "DotGothic16", sans-serif;
  }
  .home-page__optionText {
    &--language {
      color: #000;
      font-size: 1rem;
      margin: 10px;
    }
    &--theme {
      color: #000;
      font-size: 1rem;
      margin: 10px;
    }
  }
  .home-page__label {
    &--language {
      padding: 0 10px;
    }
    &--theme {
      padding: 0 10px;
    }
  }
`;

const FormButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  width: 100px;
  height: 30px;
  color: #fff;
  font-weight: 900;
  font-family: "DotGothic16", sans-serif;
  letter-spacing: 0.1em;
  font-size: 1rem;
  margin: 1rem;
  border: none;
  cursor: pointer;
  &:hover {
    color: #fff;
    filter: brightness(95%);
  }
  &:active {
    transform: scale(0.99);
    background-color: darken(#3d50df, 25%);
    box-shadow: 0 1px 20px #d6d6d6;
  }
`;
