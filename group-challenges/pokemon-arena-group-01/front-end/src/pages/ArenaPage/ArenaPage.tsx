import { useState, useContext} from 'react';
import { UserContext } from '../../store/context/userContext';

import Loading from '../../components/Loading/Loading';
import Statistics from "../../components/Statistics/Statistics";
import MenuMoves from '../../components/MenuMoves/MenuMoves';
import "./ArenaPage.scss";
import { RandomPokemonsContext } from '../../store/context/randomPokemonsContext';


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
              { <Statistics pokemon={userRandomPokemon} />}
              { <Statistics pokemon={computerRandomPokemon} />}
              </div>
              { <MenuMoves
                  pokemon={userRandomPokemon}
                  loading={isLoading}
                />}
            </div>
        </div>
        } */}
        </div>
        </>
    )
};

export default ArenaPage;