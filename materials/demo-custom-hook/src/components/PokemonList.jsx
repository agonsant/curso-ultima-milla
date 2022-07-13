import { usePokemons } from "../core/pokemons/pokemons.hooks";
import PokemonDetail from "./PokemonDetail";

function PokemonList(){
    const {pokemonList, nextPokemons} = usePokemons();
    
    return (
        <ul style={{display: 'flex', flexWrap:'wrap', listStyle: 'none'}}>
            {pokemonList.map(p => <PokemonDetail key={p.name} pokemon={p} />)}
            <button onClick={nextPokemons}>Next</button>
        </ul>
    )
}

export default PokemonList;