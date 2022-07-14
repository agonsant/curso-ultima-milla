import userTurn from "./userTurn";

const startBattle: () => void = () => {
  console.log(
    "This function is going to initialize the battle, and summon the playerTurn function"
  );
  userTurn();
};

export default startBattle;
