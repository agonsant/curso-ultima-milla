interface IStartOptions {
  language: string;
  theme: boolean;
}

const StartOptions: React.FC<IStartOptions> = () => {
  return (
    <>
      <h1>Choose your start settings</h1>

      <form>
        <legend> Please choose language:</legend>
        <div className="home-page__languages">
          <input
            id="English"
            type="radio"
            name="language"
            value="English"
            defaultChecked
          />
          <label htmlFor="English">English</label>

          <input id="Spanish" type="radio" name="language" value="Spanish" />
          <label htmlFor="Spanish">Spanish</label>
        </div>

        <legend> Please choose your theme: </legend>
        <div className="home-page__theme">
          <input
            id="light"
            type="radio"
            name="theme"
            value="Light"
            defaultChecked
          />
          <label htmlFor="light">Light</label>

          <input id="dark" type="radio" name="theme" value="Dark" />
          <label htmlFor="dark">Dark</label>
        </div>

        <button type="submit">Start game</button>
      </form>
    </>
  );
};

export default StartOptions;
