import { PokemonMove } from '../models/randomPokemon-model';
// import getDamageRelations from './getDamageRelations';

const randomMoves = async (arrayIds: Array<number>) => {
    const randomMoves: Array<PokemonMove> = [];
    for(let position = 0; position < arrayIds.length; position++) {
        const data = await fetch(`https://pokeapi.co/api/v2/move/${arrayIds[position]}`);
        const response = await data.json();
        try {
            const move = {
                name: response.name,
                id: response.id,
                power: response.power === null ? 0 : response.power, // power could be null, in this case it's replaced by 0
                priority: response.priority,
                typeName: response.type.name,
                // damage_relations: await getDamageRelations(response.id),
            }
            console.log('move', move)
            randomMoves.push(move);
        } catch (error) {
            throw new Error('There are not moves');
        }
    }
    return randomMoves;
};

export default randomMoves;