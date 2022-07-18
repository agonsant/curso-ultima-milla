import { useState, useEffect, useContext} from 'react';
import { UserContext } from '../../store/context/userContext';

import Loading from '../../components/Loading';
import getOneRandomPokemon from '../../helpers/getOneRandomPokemon';
import { RandomPokemon } from '../../models/randomPokemon-model';
import "./ArenaPage.scss";
import PlayerStatus from '../../components/PlayerStatus/PlayerStatus';


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


    return (
        <>
        <div className="arena-page">
        <h2>Arena Page</h2>
           <p> Player's name: {user?.name} </p>
           <p> Game language: {user?.language} </p>
        {isLoading &&
            <Loading />
        }
        {randomPokemon &&
        <div>
         <div className="arena">
              <div className="arena__players">
              { <PlayerStatus pokemon={randomPokemon} />}
              { <PlayerStatus pokemon={randomPokemon} />}
              </div>
            </div>
        </div>
        }
        </div>
        </>
    )
};

export default ArenaPage;