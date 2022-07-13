/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
const useAPI = () => {
  const getPokemonDataUrl = (id: string) => `${process.env.REACT_APP_API_POKEMON}pokemon/${id}`;
  
  const getPokemonData = async (id:string) => {
    const response = await fetch(getPokemonDataUrl(id))
    const pokemonData = await response.json();
    return pokemonData;
  }

  const getPokemonName = async (id:string) => {
    const response = await (getPokemonData(id));
    const pokemonName = response.name;
    return pokemonName;
  }
  
  const getPokemonImage = async (id:string) => {
    const response = await (getPokemonData(id));
    const pokemonImageUrl = response.sprites.other.dream_world.front_default;
    return pokemonImageUrl;
  }

  return { 
    getPokemonImage, 
    getPokemonName,
    getPokemonData
  }
}

export default useAPI;