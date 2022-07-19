import { useState } from "react";
import { useNavigate } from "react-router";

import { RandomPokemon } from "../../models/randomPokemon-model";
import { PokemonMove } from "../../models/randomPokemon-model";
import "./PlayerStatus.scss";

interface IPlayerStatusProps {
  pokemon: RandomPokemon;
  opponent: RandomPokemon;
  isComputer: boolean;
}

const PlayerStatus: React.FC<IPlayerStatusProps> = ({
  pokemon,
  opponent,
  isComputer,
}) => {
  const navigate = useNavigate();

  const maxOpponentHealth = opponent?.stats;
  const [opponentHealth, setOpponentHealth] = useState(maxOpponentHealth);
  const attacks = pokemon?.moves;
  const healthBar = document.getElementById('health') as HTMLDivElement;

  const chooseAttack = (move:PokemonMove) => () => {
    if (typeof maxOpponentHealth !== 'undefined' && typeof opponentHealth !== "undefined" && healthBar !== null) {
      const powerAttack = move.power;

      const newOpponentHealth = opponentHealth - powerAttack; 
      const newHealthPercentage = (newOpponentHealth/ maxOpponentHealth) *100;
      setOpponentHealth(newOpponentHealth);
      healthBar.style.width=`${newHealthPercentage}%`;

      console.log(newOpponentHealth);
      console.log(newHealthPercentage);

      if ( newHealthPercentage < 1) {
        console.log(`${pokemon?.name} won`);
        navigate(`/ranking/${pokemon?.name}`);
      }
    }
  };

  // const runAway = () => {
  //   navigate("/");
  // };

  return (
    <div className="pokemon">
      {pokemon && (
        <>
          <div className="pokemon__info">
            <p className="statistics__pokemon-name">
              {pokemon.name.toUpperCase()}{" "}
            </p>
            <p className="statistics__pokemon-maxHealth"> Max health: {pokemon.stats} </p>
            <div id="health"> </div>
          </div>
          <div className="pokemon__img">
            {isComputer && (
              <img src={pokemon.sprites.front_default} alt={pokemon.name} width={250} height={250}/>
            )}
            {!isComputer && (
              <img src={pokemon.sprites.back_default} alt={pokemon.name} width={250} height={250} />
            )}
          </div>
          <div className="pokemon__moves">
            <div className="pokemon__right">
              <ul className="pokemon__attacks-list">
                {attacks?.map((move: PokemonMove, index: number) => (
                  <li key={index} className="btn pokemon__item">
                    <button className="btn" onClick={chooseAttack(move)}>
                      <p> Name: {move.name} </p> 
                      {move.power} 
                    </button>
                  </li>
                ))}
              </ul>
              {/* <button className="btn btn--run" onClick={runAway}>
                RUN
              </button> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerStatus;
