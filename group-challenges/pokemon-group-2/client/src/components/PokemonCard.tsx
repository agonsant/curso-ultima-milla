import { useState } from "react";
import useAPI from "../hooks/useAPI";

const PokemonCard = () => {
  const { getPokemonImage, getPokemonName } = useAPI();
  const [urlImage, setUrlImage] = useState ("")
  const [pokemonName, setPokemonName] = useState ("")
  const idPokemon = "1";
 
  const getPokemonDataToRender = async() => {
    setUrlImage(await getPokemonImage(idPokemon))
    setPokemonName(await getPokemonName(idPokemon))
    return setUrlImage 
  }

  getPokemonDataToRender();
  
  return (
    <>
      <p>Some pokemon </p>
      <p>{pokemonName}</p>
      <img alt="pokemon fetch" width="100" src={`${urlImage}`}/>
    </>
  );
};

export default PokemonCard;
