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
        <HealthBar currentValue={pokemon.stat} isEmpty={false}></HealthBar>
        <h2>{pokemon.name}</h2>
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
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PokeImage = styled.img`
  width: 220px;
  margin: 10px 30px 30px 30px;
`;
