import MenuMoves from "../MenuMoves/MenuMoves";
import "./PlayerStatus.scss";

const PlayerStatus = ({pokemon}:any) => {

  return (
    <div className="pokemon">
      <div className="pokemon__info">
        <p className="statistics__pokemon-name">{pokemon.name.toUpperCase()} </p>
        <p className="statistics__pokemon-level"> Hp:  {pokemon.stats[0].base_stat} </p>
        <progress id="health" value="100" max="100"> </progress>
      </div>
      <div className="pokemon__img">  
        <img
          src={pokemon.sprites.back_default}
          alt={pokemon.name}
        />
      </div>
      { <MenuMoves 
          pokemon={pokemon}
        />}
    </div>    
  )
};

export default PlayerStatus;