import styled from "styled-components";
import HealthBar from "./HealthBar";
import { IPokemon } from "../types/pokemon.model";

interface IPokemonCardProps {
  pokemon: IPokemon;
  isPokemonA: boolean;
}

const PokemonCardArena: React.FC<IPokemonCardProps> = ({
  pokemon,
  isPokemonA,
}) => {
  console.log("pokemon", pokemon);

  return (
    <>
      <CardContainer>
        <HealthBar pokemonName={pokemon.name} currentValue={pokemon.stat} isEmpty={false}></HealthBar>
        <PokeImage
          alt={pokemon.name}
          src={isPokemonA ? pokemon.images.front : pokemon.images.back}
          />
      </CardContainer>
    </>
  );
};

export default PokemonCardArena;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 380px;
  border-radius: 30px 0 30px 0;
`;

const PokeImage = styled.img`
  width: 220px;
  max-height: 220px;
  margin: 10px 30px 30px 30px;
`;
