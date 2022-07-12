import styled from "styled-components";

const HealthBar = () => {
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
