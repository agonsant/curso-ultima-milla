import { RandomPokemon } from '../models/randomPokemon-model';

import './PokemonPresentationCard.scss';

const PokemonPresentationCard = ({name, id, sprites, stats, moves, types}: RandomPokemon) => {

return (
    <article  className="pokemon-presentation-card">
        {sprites.front_default &&
            <div className="pokemon-presentation-card__image">
                <img src={sprites.front_default} alt="Pokemon" className="image__image" />
            </div>
        }
            <h3 className="pokemon-presentation-card__name" >{ name.toUpperCase() }</h3>
            <h3 className="pokemon-presentation-card__id" >id: { id }</h3>
            <p className="pokemon-presentation-card__stat" >stat effort: { stats.map(stat => stat.effort) }</p>
            {/* <p className="pokemon-presentation-card__moves" >moves name: { moves.map(move => move.move.name) }</p> */}
            <p className="pokemon-presentation-card__slot" >slot: { types.map(type => type.slot) }</p>
    </article>
)
};

export default PokemonPresentationCard;