import computerTurn from "./computerTurn";
import userTurn from "./userTurn";

const nextTurn: (isUserTurn: boolean) => void = (isUserTurn) => {
  console.log(
    "receives a boolean and if its true calls the userTurn, if not call the computerTurn"
  );
  if (isUserTurn) {
    userTurn();
  }
  computerTurn();
};

export default nextTurn;
