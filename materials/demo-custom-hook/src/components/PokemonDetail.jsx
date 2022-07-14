


function PokemonDetail({pokemon}){
    console.log(pokemon, 'Detalle de un pokemon')
    return (
        <article>
            <li>{pokemon.name}</li>
            <img src={pokemon.sprites?.front_default} alt=""></img>
        </article>
    )
}

export default PokemonDetail;

