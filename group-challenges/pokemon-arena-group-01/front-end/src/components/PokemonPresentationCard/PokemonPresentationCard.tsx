import { RandomPokemon } from '../../models/randomPokemon-model';

import './PokemonPresentationCard.scss';

const PokemonPresentationCard = (randomPokemon: RandomPokemon ) => {

    return (
        <article  className="pokemon-presentation-card">
            {randomPokemon?.sprites.front_default &&
                <div className="pokemon-presentation-card__image">
                    <img src={randomPokemon.sprites.front_default} alt="Pokemon" className="image__image" />
                </div>
            }
                <h3 className="pokemon-presentation-card__name" >{ randomPokemon?.name.toUpperCase() }</h3>
                <h3 className="pokemon-presentation-card__id" >PokeDex-Number: { randomPokemon?.id }</h3>
                <p className="pokemon-presentation-card__stat" >stat effort: { randomPokemon?.stats }</p>
            {randomPokemon?.moves &&
                <ul className="pokemon-presentation-card__moveList">available movements: { randomPokemon?.moves.map(move =>
                    <li
                        className="moveList__item"
                        key={randomPokemon?.id}>
                            { move.name } - power: {move.power}
                    </li>
                )}</ul>

            }
                <p className="pokemon-presentation-card__slot" >slot: { randomPokemon?.types.map(type => type.slot) }</p>
        </article>
    )
};

export default PokemonPresentationCard;