import endBattle from "./endBattle";
import nextTurn from "./nextTurn";

const checkIfDefeated: (actualHealth: number) => void = (actualHealth) => {
  const isUserTurn = true; // This var is going to be picked from the state not hardcoded
  console.log(
    "check if any pokemon is defeated, and ends the game if not, calls the nextTurn function"
  );
  if (actualHealth <= 0) {
    endBattle();
  }
  nextTurn(isUserTurn);
};

export default checkIfDefeated;
