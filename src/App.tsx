import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle.ts";
import { phrasesInterface, worldTimeInterface } from "./data/Types";
import Quotes from "./components/Quotes.tsx";
import Clock from "./components/Clock.tsx";
import { Helmet } from "react-helmet";
import Loader from "./components/Loader.tsx";

function App() {
  const [random, setRandom] = useState<phrasesInterface | null>(null);
  const [area, setArea] = useState<worldTimeInterface | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    (async () => {
      const response = await fetch(`https://quotable.io/random`);
      const data = await response.json();
      setRandom(data);
    })();
    (async () => {
      const response = await fetch(`https://worldtimeapi.org/api/ip`);
      const data = await response.json();
      setArea(data);
    })();
  }, []);

  const generateRandomPhrase = async () => {
    const response = await fetch(`https://quotable.io/random`);
    const data = await response.json();
    setRandom(data);
  };

  const Greeting = () => {
    const currentTime = new Date().getHours();
    const morningStart = 5;
    const morningEnd = 17;
    return currentTime >= morningStart && currentTime <= morningEnd
      ? "Good Morning"
      : "Good Night";
  };
  const HandleClick = () => {
    setIsClicked(!isClicked);
  };
  let isDaytime = Greeting() == "Good Morning";

  return (
    <ThemeProvider theme={{ isDaytime }}>
      {loading ? (
        <Loader />
      ) : (
        <Container isClicked={isClicked}>
          <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <GlobalStyle isDaytime={isDaytime} />
          <Quotes
            random={random}
            setRandom={setRandom}
            generateRandomPhrase={generateRandomPhrase}
          />
          <Clock
            Greeting={Greeting}
            area={area}
            isDaytime={isDaytime}
            isClicked={isClicked}
            HandleClick={HandleClick}
          />
        </Container>
      )}
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div<{ isClicked: boolean }>`
  position: relative;
  height: 100%;
  padding: 3.17rem 2.6rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* max-width: 111rem; */
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isClicked ? "translate3d(0, -25.6rem, 0)" : "none"};
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    z-index: -1;
  }
  @media (min-width: 768px) {
    padding: 8rem 6.4rem;
  }
  @media (min-width: 992px) {
    padding: 5.6rem 16.5rem;
  }
`;
