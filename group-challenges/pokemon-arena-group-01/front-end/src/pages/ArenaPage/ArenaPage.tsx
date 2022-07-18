import { useContext } from 'react';

import PlayerStatus from '../../components/PlayerStatus/PlayerStatus';
import "./ArenaPage.scss";



const ArenaPage = () => {
    // const {
    //     isLoading,
    //     userRandomPokemon,
    //     computerRandomPokemon, } = useContext(RandomPokemonsContext);

    return (
        <>
        <div className="arena-page">
        <h2>Arena Page</h2>
{/*
        {isLoading &&
            <Loading />
        }
        {userRandomPokemon && computerRandomPokemon &&
        <div>
         <div className="arena">
              <div className="arena__players">
              { <PlayerStatus pokemon={randomPokemon} />}
              { <PlayerStatus pokemon={randomPokemon} />}
              </div>
            </div>
        </div>
        } */}
        </div>
        </>
    )
};

export default ArenaPage;