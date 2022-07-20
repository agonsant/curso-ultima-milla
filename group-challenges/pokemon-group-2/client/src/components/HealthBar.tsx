import styled from "styled-components";

interface IHealthBarProps {
  pokemonName: string;
  currentValue: number;
  isEmpty: boolean;
}

const HealthBar: React.FC<IHealthBarProps> = ({ pokemonName, currentValue, isEmpty }) => {
  return (
    <>
      <MainContainer>
        <SpanPokeName>{`${pokemonName.toUpperCase()}`}</SpanPokeName>
        <ContainerStyles>
          <FillerStyles>
            <LabelStyles>{`${currentValue}`}</LabelStyles>
          </FillerStyles>
        </ContainerStyles>
      </MainContainer>
    </>
  );
};

export default HealthBar;

const MainContainer = styled.div`
  border: 5px double #283618;
  border-radius: 30px 0 30px 0;
  font-weight: 700;
  font-size: 20px;
  color: #283618; 
  background-color: #e9edc9;
`

const SpanPokeName = styled.p `
  text-align: center;
`

const ContainerStyles = styled.div`
  height: 25px;
  width: 300px;
  background-color: #e0e0de;
  border-radius: 50px;
  margin: 10px 50px;
  display: flex;;
  flex-direction: column;
`;

const FillerStyles = styled.div`
  height: 100%;
  width: 100%;
  transition: width 1s ease-in-out;
  background-color: #5ef75c;
  border-radius: inherit;
  text-align: right;
`;

const LabelStyles = styled.span`
  padding: 5px;
  color: white;
  font-weight: bold;
`;
