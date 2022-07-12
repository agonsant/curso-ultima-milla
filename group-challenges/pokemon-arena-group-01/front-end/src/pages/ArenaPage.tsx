import React from 'react';
import { useState, useEffect} from 'react';
import Loading from '../components/Loading';
import getOneRandomPokemon from '../helpers/getOneRandomPokemon';
import { RandomPokemon } from '../models/randomPokemon-model';


const ArenaPage = () => {

    const [randomPokemon, setRandomPokemon] = useState<RandomPokemon>();

    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        getOneRandomPokemon()
        .then((data) => {
            setRandomPokemon(data);
            setLoading(false);
        });
    }, []);

    const handleSearchRandomPokemon = () => {
        setLoading(true);
        getOneRandomPokemon()
        .then((data) => {
            setRandomPokemon(data);
            setLoading(false);
        });
    }


    return (
        <>
        <h2>Arena Page</h2>
        <button onClick={ handleSearchRandomPokemon }>Search Random Pokemon</button>
        {isLoading &&
            <Loading />
        }
        <h3>Play with: { randomPokemon?.name.toUpperCase() }</h3>
        <h3>id: { randomPokemon?.id }</h3>
        <p>moves name: { randomPokemon?.moves?.map(move => move.move.name) }</p>
        <p>slot: { randomPokemon?.types?.map(type => type.slot) }</p>
        <p>stat effort: { randomPokemon?.stats?.map(stat => stat.effort) }</p>
        {/* <p>sprites: { randomPokemon?.sprites?.map(sprite => sprite.front_default) }</p> */}

        </>
    )
};

export default ArenaPage;