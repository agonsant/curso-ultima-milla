import { useState } from "react";
import useAPI from "../hooks/useAPI";
import styled from "styled-components";

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
      <CardContainer>
        <p>Some pokemon </p>
        <p>{pokemonName}</p>
        <img alt="pokemon fetch" width="100" src={`${urlImage}`}/>
      </CardContainer>
    </>
  );
};

export default PokemonCard;

const CardContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
`
