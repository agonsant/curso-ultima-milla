import styled from "styled-components";

interface IHealthBarProps {
  maxValue: number;
  minValue: number;
  isEmpty: boolean;
}

const HealthBar: React.FC<IHealthBarProps> = ({
  maxValue,
  minValue,
  isEmpty,
}) => {
  return (
    <>
      <Health>HP</Health>
      <div>
        <div></div>
      </div>
    </>
  );
};

export default HealthBar;

const Health = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
