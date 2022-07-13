import { useState, useEffect, useContext} from 'react';
import { UserContext } from '../store/context/userContext';

import Loading from '../components/Loading';
import getOneRandomPokemon from '../helpers/getOneRandomPokemon';
import { RandomPokemon } from '../models/randomPokemon-model';


const ArenaPage = () => {
    const user = useContext(UserContext);

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
    };


    return (
        <>
        <h2>Arena Page</h2>
           <p> Player's name: {user?.name} </p>
           <p> Game language: {user?.language} </p>
        <button onClick={ handleSearchRandomPokemon }>Search Random Pokemon</button>
        {isLoading &&
            <Loading />
        }
        {randomPokemon &&
        <div>
            <h3>Play with: { randomPokemon.name.toUpperCase() }</h3>
            <h3>id: { randomPokemon.id }</h3>
            <p>moves name: { randomPokemon.moves.map(move => move.move.name) }</p>
            <p>slot: { randomPokemon.types.map(type => type.slot) }</p>

            {randomPokemon.sprites.front_default &&
                <img src={randomPokemon.sprites.front_default} alt="Pokemon" />
            }
            {randomPokemon.sprites.back_default &&
                <img src={randomPokemon.sprites.back_default} alt="Pokemon" />
            }
            <p>stat effort: { randomPokemon?.stats?.map(stat => stat.effort) }</p>
        </div>

        }


        </>
    )
};

export default ArenaPage;