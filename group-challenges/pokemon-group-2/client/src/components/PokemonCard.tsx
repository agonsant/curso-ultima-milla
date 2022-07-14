import { useState } from "react";
import useAPI from "../hooks/useAPI";
import styled from "styled-components";

const PokemonCard = () => {
  const { getPokemonImageFront, getPokemonImageBack, getPokemonName } = useAPI();
  const [urlImageFront, setUrlImageFront] = useState ("")
  const [urlImageBack, setUrlImageBack] = useState ("")
  const [pokemonNameA, setPokemonNameA] = useState ("")
  const [pokemonNameB, setPokemonNameB] = useState ("")
  const idPokemonA = "1";
  const idPokemonB = "25";
 
  const getPokemonDataToRender = async() => {
    setUrlImageFront(await getPokemonImageFront(idPokemonA))
    setUrlImageBack(await getPokemonImageBack(idPokemonB))
    setPokemonNameA(await getPokemonName(idPokemonA))
    setPokemonNameB(await getPokemonName(idPokemonB))
    return {
      setUrlImageFront,
      setUrlImageBack,
      pokemonNameA,
      pokemonNameB  
    }
  }

  getPokemonDataToRender();
  
  return (
    <>
      <CardContainer>
        <p>Some pokemon Front </p>
        <p>{pokemonNameA}</p>
        <img alt="pokemon front" width="100" src={`${urlImageFront}`}/>
      </CardContainer>
      <CardContainer>
        <p>Some pokemon Back</p>
        <p>{pokemonNameB}</p>
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
