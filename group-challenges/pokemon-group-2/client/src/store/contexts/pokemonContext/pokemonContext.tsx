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

const PokemonContext = createContext<IPokemonContext>({
  pokemonId: "",
  pokemonName: "",
  pokemonHealth: 30,
  isPokemonA: true,
  pokemonImageFrontUrl: "",
  pokemonImageBackUrl: "",
  pokemonHealthDamage: () => {},
  setPokemonData: () => {},
});

PokemonContext.displayName = "Pokemon Context";


export default PokemonContext;
