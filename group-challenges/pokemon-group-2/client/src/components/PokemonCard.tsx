import { useState } from "react";
import useAPI from "../hooks/useAPI";
import styled from "styled-components";

const PokemonCard = () => {
  const { getPokemonImageFront, getPokemonImageBack, getPokemonName } = useAPI();
  const [urlImageFront, setUrlImageFront] = useState ("")
  const [urlImageBack, setUrlImageBack] = useState ("")
  const [pokemonName, setPokemonName] = useState ("")
  const idPokemon = "1";
 
  const getPokemonDataToRender = async() => {
    setUrlImageFront(await getPokemonImageFront(idPokemon))
    setUrlImageBack(await getPokemonImageBack(idPokemon))
    setPokemonName(await getPokemonName(idPokemon))
    return {
      setUrlImageFront,
      setUrlImageBack,
      setPokemonName  
    }
  }

  getPokemonDataToRender();
  
  return (
    <>
      <CardContainer>
        <p>Some pokemon Front </p>
        <p>{pokemonName}</p>
        <img alt="pokemon front" width="100" src={`${urlImageFront}`}/>
      </CardContainer>
      <CardContainer>
        <p>Some pokemon Back</p>
        <p>{pokemonName}</p>
        <img alt="pokemon back" width="100" src={`${urlImageBack}`}/>
      </CardContainer>
    </>
  );
};

export default PokemonCard;

const CardContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
`
