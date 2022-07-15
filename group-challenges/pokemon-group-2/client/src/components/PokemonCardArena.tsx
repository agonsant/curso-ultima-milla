import { useContext } from "react";
import useAPI from "../hooks/useAPI";
import styled from "styled-components";
import PokemonContext from "../store/contexts/pokemonContext/pokemonContext";

const PokemonCardArena = () => {
  const pokeId = "21";

  const {
    setPokemonData,
    pokemonName,
    pokemonHealth,
    isPokemonA,
    pokemonImageFrontUrl,
    pokemonImageBackUrl,
  } = useContext(PokemonContext);

  const { getPokemonData } = useAPI();

  const pokemonDataApi = async (id: string) => {
    const data = await getPokemonData(id);
    setPokemonData(
      data.name,
      data.weight,
      true,
      data.sprites.other.dream_world.front_default,
      data.sprites.back_default
    );
    return setPokemonData;
  };

  pokemonDataApi(pokeId);

  return (
    <>
      <CardContainer>
        <h2>{pokemonName}</h2>
        <p>HP: {pokemonHealth}</p>

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
