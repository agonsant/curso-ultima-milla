import { useState, useEffect, useContext} from 'react';
import { useNavigate } from "react-router";

import { ThemeContext } from '../../store/context/ThemeContext';
import { UserContext } from '../../store/context/userContext';

import getOneRandomPokemon from '../../helpers/getOneRandomPokemon';
import { RandomPokemon } from '../../models/randomPokemon-model';

import Loading from '../../components/Loading/Loading';
import PokemonPresentationCard from '../../components/PokemonPresentationCard/PokemonPresentationCard';

import './UserOponent.scss';


const UserOponent: React.FC = (): JSX.Element => {
    const navigate=useNavigate();

    const {isNightModeOn} = useContext(ThemeContext);
    const user = useContext(UserContext);

    // const {
    //     isLoading,
    //     setLoading,
    //     userRandomPokemon,
    //     setUserRandomPokemon,
    //     computerRandomPokemon,
    //     setComputerRandomPokemon } = useContext(RandomPokemonsContext);

    const [userRandomPokemon, setUserRandomPokemon] = useState<RandomPokemon>();
    const [computerRandomPokemon, setComputerRandomPokemon] = useState<RandomPokemon>();
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        getOneRandomPokemon()
        .then((data) => {
            setUserRandomPokemon(data);
            setLoading(false);
        });
        getOneRandomPokemon()
        .then((data) => {
            setComputerRandomPokemon(data);
            setLoading(false);
        });
    }, []);

    console.log('userPokemon', userRandomPokemon)
    console.log('computerPokemon', computerRandomPokemon)
    const playGame = () => {
      navigate('/arena');
    };

    return (
        <div className={`user-oponent-page ${isNightModeOn ? "background-night" : "background-light"}`}>
            <h2 className='user-oponent-page__title'>{user?.name} Vs Computer</h2>
            <div className='user-oponent-page__container'>
            {isLoading &&
                <Loading />
            }
                <section className='container__player'>
                    {userRandomPokemon &&
                        <section className='player__info'>
                            <h3 className='info__pokemon'> Your Pokemon </h3>
                            <PokemonPresentationCard
                                {...userRandomPokemon}
                            />
                        </section>
            }
                </section>
                <section className='container__player'>
                    {computerRandomPokemon &&
                        <section className='player__info'>
                            <h3 className='info__pokemon'> Computer </h3>
                            <PokemonPresentationCard
                                {...computerRandomPokemon}
                            />
                        </section>
                }
                </section>
            </div>
            <button
                type='submit'
                className='user-oponent-page__button'
                >
                Lets Figth!
            </button>
            <button type='submit' onClick={playGame}>Lets Figth!</button>

        </div>
    )
}

export default UserOponent;