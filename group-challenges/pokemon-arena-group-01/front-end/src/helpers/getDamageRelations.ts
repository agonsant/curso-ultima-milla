import { PokemonDamageRelations } from "../models/randomPokemon-model";

const getDamageRelationsName = (array:any) => {
    const damageRelationsName = [];
    for(let position = 0; position < array.length; position++) {
        const name = array[position].name;
        damageRelationsName.push(name);
    }
    return damageRelationsName;
}

const getDamageRelations = async (moveId:number) => {
    const data = await fetch(`https://pokeapi.co/api/v2/type/${moveId}`);
    const response = await data.json();
    const damageRelation: PokemonDamageRelations = {
        double_damage_from: getDamageRelationsName(response.damage_relations.double_damage_from),
        double_damage_to: getDamageRelationsName(response.damage_relations.double_damage_to),
        half_damage_from: getDamageRelationsName(response.damage_relations.half_damage_from),
        half_damage_to: getDamageRelationsName(response.damage_relations.half_damage_to),
        no_damage_from: getDamageRelationsName(response.damage_relations.no_damage_from),
        no_damage_to: getDamageRelationsName(response.damage_relations.no_damage_to),
    }
    console.log('damageRelation', damageRelation)
    return damageRelation;
};

export default getDamageRelations;