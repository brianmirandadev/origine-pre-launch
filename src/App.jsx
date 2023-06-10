import './CSS/index.css';
import styled from 'styled-components';

const CircleWrapper = styled.div`
  animation: rotation 8s linear infinite;

  position: relative;
  z-index: -1;
`;

const CircleContainer = styled.div`
  width: 400px;
  height: 400px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 450px) {
    transform: translate(-50%, -50%) scale(0.7);
  }
`;

const BlurriedCircle = styled.div`
  background: linear-gradient(#ffffff 0%, #e3e3e3 5%, #2b2b2b 25%);
  width: 100%;
  height: 100%;

  border-radius: 50%;

  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(7px);

  &::after {
    content: '';
    background: linear-gradient(#ffffff 0%, #d1d1d1 5%, #2b2b2b 25%);

    width: 100%;
    height: 100%;

    border-radius: 50%;

    position: absolute;
    top: 43%;
    left: 50%;
    transform: translate(-50%, -50%);

    filter: blur(14px);
    opacity: 0.3;
  }
`;

const Circle = styled.div`
  background: linear-gradient(#2e2e2e 0%, #000000 30%);
  width: 100%;
  height: 100%;

  border-radius: 50%;

  position: absolute;
  top: 0%;
  left: 0%;
`;

const StyledH1 = styled.h1`
  padding: 0px 30px;

  font-size: 0.6rem;
  letter-spacing: 6px;
  line-height: 24px;

  text-align: center;
`;

const App = () => {
  return (
    <>
      <CircleWrapper>
        <CircleContainer>
          <BlurriedCircle></BlurriedCircle>
          <Circle></Circle>
        </CircleContainer>
      </CircleWrapper>

      <StyledH1>Notre point d’Origine est encore en développement.</StyledH1>
    </>
  );
};

export default App;
