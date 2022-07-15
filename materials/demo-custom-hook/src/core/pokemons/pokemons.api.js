


const getPokemonDetailByName = async (name) => {
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return await r.json();
}


export const getPokemons = async (nextUrl) => {
    const r = await fetch(nextUrl);
    const pokemons = await r.json();
    const pokemonPromises = pokemons.results.map(p => getPokemonDetailByName(p.name));
    const promisesResult = await Promise.allSettled(pokemonPromises);
    return {
        next: pokemons.next,
        list: promisesResult.map(r => r.value)
    }
}