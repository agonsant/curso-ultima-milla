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

  const attacks = pokemon?.moves;
  const maxOpponentHealth = opponent?.stats;
  const [opponentHealth, setOpponentHealth] = useState(maxOpponentHealth);

  const chooseAttack = (move:PokemonMove, pokemon:RandomPokemon) => () => {
    const attackInfo = {
      name: pokemon?.name,
      priority: move.priority,
      power: move.power,
    };
  
    if (typeof maxOpponentHealth !== 'undefined' && typeof opponentHealth !== "undefined" ) {
      const powerAttack = move.power;

      const newOpponentHealth = opponentHealth - powerAttack; 
      setOpponentHealth(newOpponentHealth);
      const newHealthPercentage = Math.round((newOpponentHealth/ maxOpponentHealth) * 100);
      const healthBar = document.querySelector('.opponent-health') as HTMLDivElement;
      healthBar.style.width=`${newHealthPercentage}%`;
      healthBar.innerHTML=`${newHealthPercentage}%`;

      console.log(newOpponentHealth);
      console.log(newHealthPercentage);

      if ( newHealthPercentage < 1) {
        console.log(`${pokemon?.name} won`);
        navigate(`/ranking/${pokemon?.name}`);
      }
    }
  };

  return (
    <div className="pokemon">
      {pokemon && (
        <>
          <div className="pokemon__info">
            <p className="pokemon__name">
              {pokemon.name.toUpperCase()}{" "}
            </p>
            <p className="pokemon__maxHealth"> Max health: {pokemon.stats} </p>
            <div className="opponent-health"> </div>
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
                  <li key={index} className="pokemon__item">
                    <button className="btn" onClick={chooseAttack(move, pokemon)}>
                      <p> Name: {move.name} </p> 
                      <p> Power: {move.power} </p> 
                      <p> Priority: {move.priority} </p> 
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerStatus;
