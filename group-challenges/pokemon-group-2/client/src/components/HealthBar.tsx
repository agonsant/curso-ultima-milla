import styled from "styled-components";

interface IHealthBarProps {
  currentValue: number;
  maxValue: number;
  minValue: number;
  isEmpty: boolean;
}

const HealthBar: React.FC<IHealthBarProps> = ({
  currentValue,
  maxValue,
  minValue,
  isEmpty,
}) => {
  return (
    <>
      <ContainerStyles>
        <FillerStyles>
        <LabelStyles>{`${currentValue} / ${maxValue}`}</LabelStyles>
        </FillerStyles>
      </ContainerStyles>
    </>
  );
};

export default HealthBar;

const ContainerStyles = styled.div`
  height: 20px;
  width: 300px;
  background-color: #e0e0de;
  border-radius: 50px;
  margin: 50px;
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