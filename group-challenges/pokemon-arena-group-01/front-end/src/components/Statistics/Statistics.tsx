import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import "./Statistics.scss";

const Statistics = ({pokemon, isLoading}:any) => {
  console.log(pokemon);
  let maxHealth = pokemon.stats[0].base_stat;
  let health = document.getElementById("health");
  // health.value -= 10;
  return (
    <div className="pokemon">
      <div className="pokemon__info">
        <p className="statistics__pokemon-name">{pokemon.name} </p>
        <p className="statistics__pokemon-level"> Hp:  </p>
        <progress id="health" value="100" max="100"> </progress>
      </div>
      <div className="pokemon__img">  
        <img
          src={pokemon.sprites.back_default}
          alt={pokemon.name}
        />
      </div>
    </div>    
  )
};

export default Statistics;