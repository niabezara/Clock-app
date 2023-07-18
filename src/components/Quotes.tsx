import styled from "styled-components";
import { phrasesInterface } from "../data/Types";

export default function Quotes({
  generateRandomPhrase,
  random,
}: {
  setRandom: React.Dispatch<React.SetStateAction<phrasesInterface | null>>;
  random: phrasesInterface | null;
  generateRandomPhrase: () => Promise<void>;
}) {
  return (
    <QuoteCard>
      {random ? (
        <TextSection>
          <h1>"{random.content}"</h1>
          <p>{random.author}</p>
        </TextSection>
      ) : null}
      <RefreshImg
        src="/icon-refresh.svg"
        alt=""
        onClick={generateRandomPhrase}
      />
    </QuoteCard>
  );
}

const QuoteCard = styled.div`
  text-transform: initial;
  font-size: 1.2rem;
  line-height: 2.2rem;
  max-width: 57.3rem;
  display: grid;
  grid-template-columns: 1fr 1.67rem;
  column-gap: 1.6rem;
`;

const TextSection = styled.section`
  h1 {
    color: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    @media (min-width: 768px) {
      font-size: 15px;
    }
  }
  p {
    color: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    @media (min-width: 768px) {
      font-size: 15px;
    }
  }
`;
const RefreshImg = styled.img`
  cursor: pointer;
`;
