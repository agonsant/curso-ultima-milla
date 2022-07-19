import { useContext } from "react";

import PlayerStatus from "../../components/PlayerStatus/PlayerStatus";
import Loading from "../../components/Loading/Loading";
import { RandomPokemonsContext } from "../../store/context/randomPokemonsContext";
import "./ArenaPage.scss";

const ArenaPage = () => {
  const { isLoading, userRandomPokemon, computerRandomPokemon } = useContext(
    RandomPokemonsContext
  );

  return (
    <>
      <div className="arena-page">
        {isLoading && <Loading />}
        {userRandomPokemon && computerRandomPokemon && (
          <div>
            <div className="arena">
              <div className="arena__players">
                {
                  <PlayerStatus
                    pokemon={userRandomPokemon}
                    opponent={computerRandomPokemon}
                    isComputer={false}
                  />
                }
                {
                  <PlayerStatus
                    pokemon={computerRandomPokemon}
                    opponent={userRandomPokemon} 
                    isComputer={true}
                  />
                }
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ArenaPage;
