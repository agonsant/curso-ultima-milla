import { useContext, useEffect } from "react";
import useAPI from "../hooks/useAPI";
import styled from "styled-components";
import PokemonContextA from "../store/contexts/pokemonContext/pokemonContext";
import HealthBar from "./HealthBar";

interface IPokemonCardProps {
  isPokemonA: boolean;
}

const PokemonCardArena: React.FC<IPokemonCardProps> = ({isPokemonA}) => {
  let pokeId: string;

  const getPokeId = (AorB: string) => {
    const pokeIdLocalStorage = localStorage.getItem(`PokeId${AorB}`);
    if(pokeIdLocalStorage) {
      pokeId = pokeIdLocalStorage;
      return pokeId;
    }
  } 
  
  if(isPokemonA){
    getPokeId("A");  //FIXME it's not working
  } else {
    getPokeId("B");
  }

  const {
    setPokemonData,
    pokemonName,
    pokemonHealth,
    pokemonImageFrontUrl,
    pokemonImageBackUrl,
  } = useContext(PokemonContextA);

  const { getPokemonData } = useAPI();

  const pokemonDataApi = async (id: string) => {
    const data = await getPokemonData(id);
    setPokemonData(
      pokeId,
      data.name,
      data.stats[0.].base_stat,
      isPokemonA,
      data.sprites.other.dream_world.front_default,
      data.sprites.back_default
    );
    return setPokemonData;
  };

  useEffect(() => {
    pokemonDataApi(pokeId);
  }, [])


  return (
    <>
      <CardContainer>
      <HealthBar currentValue={pokemonHealth} maxValue={pokemonHealth} minValue={0} isEmpty={false}></HealthBar>
        <h2>{pokemonName}</h2>
        <img
          alt={pokemonName}
          src={`${
            isPokemonA ? `${pokemonImageFrontUrl}` : `${pokemonImageBackUrl}`
          }`}
        />
      </CardContainer>
    </>
  );
};

export default PokemonCardArena;

const CardContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
`;
