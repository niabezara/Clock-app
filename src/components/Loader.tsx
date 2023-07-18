import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <LoaderContainer>
      <Ball />
    </LoaderContainer>
  );
};

export default Loader;

const bounceAnimation = keyframes`
  0% {
    background: #4284f3;
    transform: translateX(var(--displace));
  }

  100% {
    background: #ea4335;
    transform: translateX(0px);
  }
`;

const Ball = styled.div`
  --size: 20px;
  --timing: 0.7s;
  --displace: 70px;
  border-radius: 50%;
  width: var(--size);
  height: var(--size);
  background: #000;
  margin-right: var(--displace);
  animation: ${bounceAnimation} var(--timing) infinite alternate
    cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20.387113571166992px);
`;
