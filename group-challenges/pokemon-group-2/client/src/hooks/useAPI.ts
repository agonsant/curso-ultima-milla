/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
const useAPI = () => {
  const getPokemonDataUrl = (id: string) =>
    // `${process.env.REACT_APP_API_POKEMON}pokemon/${id}`;
    `https://pokeapi.co/api/v2/pokemon/${id}`;

  const getPokemonData = async (id: string) => {
    const response = await fetch(getPokemonDataUrl(id));
    const pokemonData = await response.json();
    return pokemonData;
  };

  const getPokemonName = async (id: string) => {
    const response = await getPokemonData(id);
    const pokemonName = response.name;
    return pokemonName;
  };

  const getPokemonImageFront = async (id: string) => {
    const response = await getPokemonData(id);
    const pokemonImageFrontUrl =
      response.sprites.other.dream_world.front_default;
    return pokemonImageFrontUrl;
  };

  const getPokemonImageBack = async (id: string) => {
    const response = await getPokemonData(id);
    const pokemonImageBackUrl = response.sprites.back_default;
    return pokemonImageBackUrl;
  };

  return {
    getPokemonImageFront,
    getPokemonImageBack,
    getPokemonName,
    getPokemonData,
  };
};

export default useAPI;
