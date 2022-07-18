import { useState } from "react";
import { useNavigate } from "react-router";

import "./MenuMoves.scss";

const MenuMoves = ({ pokemon }: any) => {
  const navigate = useNavigate();
  const [inFightingMode, setInFightingMode] = useState(false);
  const attacks = pokemon.moves;
  // const attacks = pokemon.moves.filter(function( attack: {name:string, url:string} ){
  //   return attack.name in ["Tackle", "Scratch", "Back"];
  // });

  const chooseAttack = () => {
    setInFightingMode(!inFightingMode);
  };

  const runAway = () => {
    navigate("/");
  };

  return (
    <>
      {inFightingMode ? (
        <div className="menu-attacks">
          <p> List types of attack </p>
          <ul>
            {attacks.map((move: { name: string; url: string }, index: any) => (
              <li key={index} className="btn menu-attacks__item">
                {move.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="menu-moves">
          <div className="menu-moves__left">
            <p>What should #{pokemon.name} do?</p>
          </div>
          <div className="menu-moves__right">
            <button className="btn btn--fight" onClick={chooseAttack}>
              FIGHT
            </button>
            <div className="btn btn--bag">
              <p>BAG</p>
            </div>
            <div className="btn btn--pokemon">
              <p>POKéMON</p>
            </div>
            <button className="btn btn--run" onClick={runAway}>
              RUN
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuMoves;
