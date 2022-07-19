/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */

const useAPI = () => {
  const getPokemonDataUrl = (id: string) =>
    // `${process.env.REACT_APP_API_POKEMON}pokemon/${id}`;
    `https://pokeapi.co/api/v2/pokemon/${id}`;

  const getOnePokemonData = async (id: string) => {
    const response = await fetch(getPokemonDataUrl(id));
    const pokemonData = await response.json();
    const pokeObject = {
      name: pokemonData.name,
      id: pokemonData.id,
      stat: pokemonData.stats[0].base_stat,
      images: {
        front: pokemonData.sprites.other.dream_world.front_default,
        back: pokemonData.sprites.back_default,
      },
      moves: pokemonData.moves.slice(0, 4),
    };
    return pokeObject;
  };

  const getPokemonAttackDamage = async (url: string) => {
    const response = await fetch(url);
    const attack = await response.json();
    const attackDamage = attack.power;
    return attackDamage;
  };

  return {
    getOnePokemonData,
    getPokemonAttackDamage,
  };
};

export default useAPI;
