import styled from "styled-components";
import { useContext } from "react";
import PokemonContext from "../store/contexts/pokemonContext/pokemonContext";

const AttackBox: React.FC = () => {
  const { pokemonB, pokemonAttack } = useContext(PokemonContext);

  return (
    <>
      <CointainerAttacks> 
        <AttackQuestion>What attack will {pokemonB.name.toUpperCase()} make?</AttackQuestion>
        <ul>
          {pokemonB.moves.map(
            (movement, index: any): JSX.Element => (
              <li
              key={index}
              className="arena-page__menu-attacks__item"
              onClick={() =>
                pokemonAttack(
                  `https://pokeapi.co/api/v2/move/${index + 1}/`
                  )
                }
                >
                {movement.move.name.toUpperCase()}
              </li>
            )
          )}
        </ul>
      </CointainerAttacks>
    </>
  );
};

export default AttackBox;

const CointainerAttacks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 50px;
  min-width: 250px;
  color: #283618; 
  background-color: #faedcd;
  border: double 5px #283618;
  border-radius: 15px 0 15px 0;
  
  .arena-page__menu-attacks__item {
    width: 200px;
    height: 30px;
    display: flex;
    justify-content: center;
    display: flex;
    cursor: pointer;
    :hover {
      font-weight: 800;
    };
  }
`

const AttackQuestion = styled.p`
  font-weight: 700;
`
