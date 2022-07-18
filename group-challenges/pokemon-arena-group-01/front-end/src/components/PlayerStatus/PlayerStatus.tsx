import { RandomPokemon } from "../../models/randomPokemon-model";
import MenuMoves from "../MenuMoves/MenuMoves";
import "./PlayerStatus.scss";

interface IPlayerStatusProps {
  pokemon: RandomPokemon;
  isComputer: boolean;
}

const PlayerStatus: React.FC<IPlayerStatusProps> = ({
  pokemon,
  isComputer,
}) => {
  return (
    <div className="pokemon">
      {pokemon && (
        <>
          <div className="pokemon__info">
            <p className="statistics__pokemon-name">
              {pokemon.name.toUpperCase()}{" "}
            </p>
            <p className="statistics__pokemon-level"> Hp: {pokemon.stats} </p>
            <progress id="health" value="100" max="100">
              {" "}
            </progress>
          </div>
          <div className="pokemon__img">
            {isComputer && (
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
            {!isComputer && (
              <img src={pokemon.sprites.back_default} alt={pokemon.name} />
            )}
          </div>
          {<MenuMoves pokemon={pokemon} />}
        </>
      )}
    </div>
  );
};

export default PlayerStatus;
