import { useState } from "react";
import { useNavigate } from "react-router";

import { PokemonMove } from "../../models/randomPokemon-model";
import "./MenuMoves.scss";

const MenuMoves = ({ pokemon }: any) => {
  const navigate = useNavigate();
  const [inFightingMode, setInFightingMode] = useState(false);
  const attacks = pokemon.moves;

  const chooseAttack = () => {
    setInFightingMode(!inFightingMode);
  };

  const runAway = () => {
    navigate("/");
  };

  return (
    <>
        <div className="menu-moves">
          <div className="menu-moves__left">
            <p>What should #{pokemon.name} do?</p>
          </div>
          <div className="menu-moves__right">
            <ul className="menu-moves_attacks-list">
              {attacks.map((move: PokemonMove, index: number) => (
                <li key={index} className="btn menu-moves__item">
                  <button className="btn" onClick={chooseAttack}>
                    {move.name}
                  </button>
                </li>
              ))}
            </ul>
            <button className="btn btn--run" onClick={runAway}>
              RUN
            </button>
          </div>
        </div>
    </>
  );
};

export default MenuMoves;
