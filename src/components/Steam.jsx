import { useCallback, useMemo } from "react";
import styled, { keyframes } from "styled-components";


export default function Steam(props){
    const {amountOfSteamBalls, steamMinXPos, maxSteamBallRad, minSteamBallRad} = props
    const SteamBalls = useMemo(() => {
        return [];
      }, []);
      
      const generateSteam = useCallback(
        (amountOfSteamBalls, steamMinXPos, maxSteamBallRad, minSteamBallRad) => {
          if (!SteamBalls.length) {
            for (let i = 0; i < amountOfSteamBalls; i++) {
              let radius = Math.floor(Math.random() * (maxSteamBallRad - minSteamBallRad + 1)) + minSteamBallRad;
              let animationDuration = Math.random() * (7 - 3) + 3;
              let animationDelay = Math.random() * 6;
              let XPos = steamMinXPos + i * 40;
              let animationEndYPos = Math.random() * (-300 + 100) - 100;
              SteamBalls.push(
                <StyledSteam
                  animationDuration={animationDuration}
                  animationDelay={animationDelay}
                  animationEndYPos={animationEndYPos}
                  key={i}
                  cx={XPos}
                  cy={230}
                  r={radius}
                />
              );
            }
          }
          return SteamBalls;
        },
        [SteamBalls]
      );
      return(
          <>
            {generateSteam(amountOfSteamBalls, steamMinXPos, maxSteamBallRad, minSteamBallRad)}
          </>
      )
}

const SteamAnimation = (animationEndYPos) => keyframes`
  0%{
        transform: translateX(0px) translateY(0) scale(1);
        opacity: 0;
      }
      30%{
      transform: translateX(0px) translateY(0) scale(1);
      opacity: 0.3;
      
    }
    100%{
        opacity: 0;
        transform: translateX(0px) translateY(${animationEndYPos}px) scale(0.8);
  }
`;

const StyledSteam = styled.circle`
  animation: ${(props) => SteamAnimation(props.animationEndYPos)}
    ${(props) => props.animationDuration}s ease-out
    ${(props) => props.animationDelay}s infinite;
  opacity: 0;
  fill: white;
  filter: blur(8px);
  transform-box: fill-box;
  transform-origin: center center;
`;