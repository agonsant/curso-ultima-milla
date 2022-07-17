import { createContext } from "react";

interface IPokemonContext {
  pokemonId: string;
  pokemonName: string;
  pokemonHealth: number;
  isPokemonA: boolean;
  pokemonImageFrontUrl: string;
  pokemonImageBackUrl: string;
  pokemonHealthDamage: (pokemonHealth: number) => void;
  setPokemonData: (
    pokemonId: string,
    pokemonName: string,
    pokemonHealth: number,
    isPokemonA: boolean,
    pokemonImageFrontUrl: string,
    pokemonImageBackUrl: string
  ) => void;
}

const PokemonContextA = createContext<IPokemonContext>({
  pokemonId: "",
  pokemonName: "",
  pokemonHealth: 30,
  isPokemonA: true,
  pokemonImageFrontUrl: "",
  pokemonImageBackUrl: "",
  pokemonHealthDamage: () => {},
  setPokemonData: () => {},
});

const PokemonContextB = createContext<IPokemonContext>({
  pokemonId: "",
  pokemonName: "",
  pokemonHealth: 30,
  isPokemonA: true,
  pokemonImageFrontUrl: "",
  pokemonImageBackUrl: "",
  pokemonHealthDamage: () => {},
  setPokemonData: () => {},
});

PokemonContextA.displayName = "Pokemon Context A";
PokemonContextB.displayName = "Pokemon Context B";

export default PokemonContextA;
