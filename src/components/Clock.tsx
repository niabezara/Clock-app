import styled from "styled-components";
import { worldTimeInterface } from "../data/Types";

export default function Clock({
  Greeting,
  area,
  isDaytime,
  isClicked,
  HandleClick,
}: {
  Greeting: () => "Good Morning" | "Good Night";
  area: worldTimeInterface | null;
  isDaytime: boolean;
  isClicked: boolean;
  HandleClick: () => void;
}) {
  console.log(isDaytime);
  return (
    <ClockCard>
      <div>
        <Greet>
          <img src={isDaytime ? "/icon-sun.svg" : "/icon-moon.svg"} />
          <p>
            {Greeting()} <Currently>IT’S CURRENTLY</Currently>
          </p>
        </Greet>

        {area?.datetime ? (
          <Time>
            {new Date(area.datetime).toLocaleTimeString("en-US", {
              hour12: false,
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
          </Time>
        ) : null}

        <Location>{area?.timezone}</Location>
      </div>
      <MoreButton onClick={() => HandleClick()}>
        {isClicked ? <span>LESS</span> : <span>MORE</span>}
        <ArrowIcon src="/icon-arrow-down.svg" alt="" rotated={isClicked} />
      </MoreButton>

      <ZoneDetails isClicked={isClicked} isDaytime={isDaytime}>
        <UlDetails>
          <li>
            <h4>Current timezone</h4>
            <p>{area?.timezone}</p>
          </li>
          <li>
            <h4>Day of the year</h4>
            <p>{area?.day_of_year}</p>
          </li>
          <li>
            <h4>Day of the week</h4>
            <p>{area?.day_of_week}</p>
          </li>
          <li>
            <h4>Week number</h4>
            <p>{area?.week_number}</p>
          </li>
        </UlDetails>
      </ZoneDetails>
    </ClockCard>
  );
}
const ClockCard = styled.div`
  text-transform: uppercase;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr max-content;
  }
`;
const Location = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 3px;
  @media (min-width: 992px) {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 4.8px;
  }
`;
const Greet = styled.div`
  display: inline-flex;
  padding-right: 0px;
  justify-content: center;
  align-items: flex-start;
  gap: 16.665px;
  p {
    display: flex;
    font-size: 1.5rem;
    line-height: 2.5rem;
    letter-spacing: 0.3rem;
    font-weight: 400;
    gap: 2rem;
  }
  img {
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    animation: rotation 6s infinite linear;
  }
`;
const Time = styled.p`
  display: flex;
  align-items: end;
  color: #fff;
  font-style: normal;
  font-weight: 700;
  font-size: 10rem;
  line-height: 10rem;
  letter-spacing: -2.5px;
  padding: 1.6rem 1.6rem 1.6rem 0;
  @media (min-width: 768px) {
    font-size: 175px;
    line-height: 175px;
    letter-spacing: -4.375px;
  }
`;
const Currently = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const MoreButton = styled.button`
  border-radius: 2.8rem;
  width: 11.5rem;
  height: 4rem;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
  background: #fff;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.4rem;
  letter-spacing: 3.75px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1px 0.5rem 0 1.5rem;
  margin-top: 4rem;
  & :hover {
    color: rgba(153, 153, 153, 1);
  }
  @media (min-width: 768px) {
    padding: 0.8rem 0.9rem 0.8rem 2.1rem;
    width: 14.6rem;
    height: 5.6rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
    letter-spacing: 0.5rem;
  }
  @media (min-width: 992px) {
    align-self: flex-end;
    margin-left: auto;
  }
`;
const ArrowIcon = styled.img<{ rotated: boolean }>`
  transition: transform 0.3s ease;
  background-color: #303030;
  padding: 1.2rem;
  border-radius: 50%;
  transform: ${(props) => (props.rotated ? "rotate(180deg)" : "rotate(0)")};
  &:hover {
    background-color: rgba(153, 153, 153, 1);
  }
`;

const ZoneDetails = styled.article<{ isClicked: boolean; isDaytime: boolean }>`
  background: ${(props) =>
    props.isDaytime ? "rgba(255, 255, 255, 0.75)" : "rgba(0, 0, 0, 0.75)"};
  backdrop-filter: blur(40.7742px);
  padding: 4.8rem 2.6rem 6.2rem;
  color: ${(props) => (props.isDaytime ? "#303030;" : "#FFF")};
  position: absolute;
  bottom: -36.6rem;
  left: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isClicked ? "translate3d(0, -8rem, 0)" : "none"};
  @media (min-width: 1024px) {
    padding: 5.5rem 16.5rem;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.6rem;
    @media (min-width: 768px) {
      display: unset;
    }
    h4 {
      text-transform: uppercase;
      font-weight: 400;
      letter-spacing: 2px;
      line-height: 2.8rem;
      font-size: 1.3rem;
    }
    p {
      font-size: 2rem;
      line-height: 2.42rem;
      font-weight: 700;
      @media (min-width: 768px) {
        padding-top: 2rem;
        font-size: 4rem;
      }
    }
  }
`;

const UlDetails = styled.ul`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 8rem;
    row-gap: 4.8rem;
  }
`;
