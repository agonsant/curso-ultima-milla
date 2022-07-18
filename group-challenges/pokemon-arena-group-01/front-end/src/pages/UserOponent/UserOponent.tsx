import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";

import { ThemeContext } from "../../store/context/ThemeContext";
import { UserContext } from "../../store/context/userContext";

import Loading from "../../components/Loading/Loading";
import PokemonPresentationCard from "../../components/PokemonPresentationCard/PokemonPresentationCard";

import "./UserOponent.scss";
import { RandomPokemonsContext } from "../../store/context/randomPokemonsContext";

const UserOponent: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const { isNightModeOn } = useContext(ThemeContext);
  const user = useContext(UserContext);

  const { isLoading, userRandomPokemon, computerRandomPokemon } = useContext(
    RandomPokemonsContext
  );

  console.log("userPokemon", userRandomPokemon);
  console.log("computerPokemon", computerRandomPokemon);
  const playGame = () => {
    navigate("/arena");
  };

  return (
    <div
      className={`user-oponent-page ${
        isNightModeOn ? "background-night" : "background-light"
      }`}
    >
      <h2 className="user-oponent-page__title">{user?.name} Vs Computer</h2>
      <div className="user-oponent-page__container">
        {isLoading && <Loading />}
        <section className="container__player">
          {userRandomPokemon && (
            <section className="player__info">
              <h3 className="info__pokemon"> Your Pokemon </h3>
              {<PokemonPresentationCard randomPokemon={userRandomPokemon} />}
            </section>
          )}
        </section>
        <section className="container__player">
          {computerRandomPokemon && (
            <section className="player__info">
              <h3 className="info__pokemon"> Computer </h3>
              {
                <PokemonPresentationCard
                  randomPokemon={computerRandomPokemon}
                />
              }
            </section>
          )}
        </section>
      </div>
      <button
        type="submit"
        onClick={playGame}
        className="user-oponent-page__button"
      >
        Lets Figth!
      </button>
    </div>
  );
};

export default UserOponent;
