import styled from "styled-components";

interface IStartOptions {
  actionOnSubmit: any;
}

const StartOptions: React.FC<IStartOptions> = ({ actionOnSubmit }) => {
  return (
    <>
      <StyledOptionsBox>
        <StyledTitle>Settings</StyledTitle>
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
          <FormButton type="submit">Start game</FormButton>
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
  padding: 0 2rem;
`;

const StyledTitle = styled.h1`
  color: #571648
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
`;

const StyledForm = styled.form`
  background-color: #173254;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
  height: 100%;
  width: 36rem;
  text-align: center;
  font-family: inherit;
  .home-page__languages {
    background-color: #eee;
    border: none;
    border-radius: 8px;
    padding: 12px 15px;
    margin: 8px 0;
    width: 90%;
    font-family: inherit;
  }
  .home-page__theme {
    background-color: #eee;
    border: none;
    border-radius: 8px;
    padding: 12px 15px;
    margin: 8px 0;
    width: 90%;
    font-family: inherit;
  }
  .home-page__optionText {
    &--language {
      color: #fff;
    }
    &--theme {
      color: #fff;
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
  @media screen and (min-device-width: 320px) and (max-width: 768px) {
    padding-right: 0rem;
    width: 24rem;
  }
`;

const FormButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  width: 250px;
  height: 60px;
  color: #fff;
  font-weight: 900;
  font-family: inherit;
  font-size: 1.3rem;
  padding: 0.6rem 2rem;
  margin: 2rem 2rem;
  border: none;
  border-radius: 15px;
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
