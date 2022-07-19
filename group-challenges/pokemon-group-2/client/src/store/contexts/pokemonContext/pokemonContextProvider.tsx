/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import useAPI from "../../../hooks/useAPI";
import PokemonContext from "./pokemonContext";

type PokemonProps = {
  children: React.ReactNode;
};

const PokemonContextProvider: React.FC<PokemonProps> = ({ children }: any) => {
  const { getOnePokemonData, getPokemonAttackDamage } = useAPI();

  const [pokemonA, setPokemonA] = useState({
    name: "",
    id: "",
    stat: 0,
    images: {
      front: "",
      back: "",
    },
    moves: [],
  });
  const [pokemonB, setPokemonB] = useState({
    name: "",
    id: "",
    stat: 0,
    images: {
      front: "",
      back: "",
    },
    moves: [
      {
        move: {
          name: "",
          url: "",
        },
      },
    ],
  });

  const pokemonAttack = async (url: string) => {
    const damageValue = await getPokemonAttackDamage(url);
    setPokemonA({ ...pokemonA, stat: pokemonA.stat - damageValue });
  };

  useEffect(() => {
    const randomIdA = Math.floor(Math.random() * 600 + 1).toString();
    const randomIdB = Math.floor(Math.random() * 600 + 1).toString();
    getOnePokemonData(randomIdA).then((pokemon) => setPokemonA(pokemon));
    getOnePokemonData(randomIdB).then((pokemon) => setPokemonB(pokemon));
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemonA, pokemonB, pokemonAttack }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
