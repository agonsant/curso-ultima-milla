/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import PokemonContext from "./pokemonContext";

type ThemeProps = {
  children: React.ReactNode;
};

const PokemonContextProvider: React.FC<ThemeProps> = ({ children }: any) => {
  const [pokemonId, setPokemonId] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonHealth, setPokemonHealth] = useState(30);
  const [isPokemonA, setIsPokemonA] = useState(true);
  const [pokemonImageFrontUrl, setPokemonImageFrontUrl] = useState("");
  const [pokemonImageBackUrl, setPokemonImageBackUrl] = useState("");

  const pokemonHealthDamage = (damage: number) => {
    setPokemonHealth(pokemonHealth - damage);
  };

  const setPokemonData = (
    pokemonId: string,
    pokemonName: string,
    pokemonHealth: number,
    isPokemonA: boolean,
    pokemonImageFrontUrl: string,
    pokemonImageBackUrl: string
  ) => {
    setPokemonId(pokemonId)
    setPokemonName(pokemonName);
    setPokemonHealth(pokemonHealth);
    setIsPokemonA(isPokemonA);
    setPokemonImageFrontUrl(pokemonImageFrontUrl);
    setPokemonImageBackUrl(pokemonImageBackUrl);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonId,
        pokemonName,
        pokemonHealth,
        isPokemonA,
        pokemonImageFrontUrl,
        pokemonImageBackUrl,
        pokemonHealthDamage,
        setPokemonData,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
