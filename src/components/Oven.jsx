import { useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Boller from './Boller';
import { boller } from './../boller';

function ControllerText() {
  return (
    <>
      <StyledText transform="translate(272.61 320)">{'TITLER'}</StyledText>
      <StyledText transform="translate(395.27 320)">{'LENKER'}</StyledText>
      <StyledText transform="translate(542.56 320)">
        <tspan letterSpacing={0}>{'B'}</tspan>
        <tspan x={9.16} y={0}>
          {'AK!'}
        </tspan>
      </StyledText>
    </>
  );
}

function TitleController(props) {
  return (
    <StyledController
      id="controller_titles"
      isTitleActive={props.isTitleActive}
      isTitleController
      onClick={() => props.setIsTitleActive((prev) => !prev)}
    >
      <path
        className="cls-18"
        d="M296 397.89a34 34 0 01-30.38-18.74h-4.36l-1.33-4.15a37.49 37.49 0 010-22.64l1.33-4.19h4.61a34 34 0 0160.26 0h3.61l1.33 4.19a37.49 37.49 0 010 22.64l-1.33 4.19h-3.36a34 34 0 01-30.38 18.7z"
      />
      <g id="controller">
        <circle className="cls-14" cx={296} cy={364} r={28} />
        <StyledControllerDial
          fill="#ccc"
          d="M325.35 354.14h-59.7a31.46 31.46 0 000 19h59.7a31.46 31.46 0 000-19z"
        />
        <path
          className="cls-14"
          d="M314.81 370.87l-2.12-2.12 4.52-4.52-4.27-4.28 2.12-2.12 6.39 6.4-6.64 6.64z"
        />
      </g>
    </StyledController>
  );
}

function LinkController(props) {
  return (
    <StyledController
      id="controller_links"
      isLinksActive={props.isLinksActive}
      isLinkController
      onClick={() => props.setIsLinksActive((prev) => !prev)}
    >
      <g id="controller-indicator">
        s
        <path
          className="cls-18"
          d="M422 397.89a34 34 0 01-30.38-18.74h-4.36l-1.33-4.15a37.49 37.49 0 010-22.64l1.33-4.19h4.61a34 34 0 0160.26 0h3.61l1.33 4.19a37.49 37.49 0 010 22.64l-1.33 4.19h-3.36a34 34 0 01-30.38 18.7z"
        />
      </g>
      <g id="controller-handle">
        <circle className="cls-14" cx={422} cy={363.89} r={28} />
        <StyledControllerDial
          className="cls-19"
          d="M451.35 354.14h-59.7a31.46 31.46 0 000 19h59.7a31.46 31.46 0 000-19z"
        />
        <path
          className="cls-14"
          d="M440.81 370.87l-2.12-2.12 4.52-4.52-4.27-4.28 2.12-2.12 6.39 6.4-6.64 6.64z"
        />
      </g>
    </StyledController>
  );
}

function OnButton(props) {
  return (
    <StyledOnButton
      id="on-button"
      onClick={() => {
        props.isOvenOpen ? props.setIsBaking(true) : props.setIsOvenOpen(true);
        props.bakeIpsum();
      }}
    >
      <path
        id="on-button-indicator"
        className="cls-18"
        d="M581.67 334.64a7 7 0 017 7v46a7 7 0 01-7 7h-46a7 7 0 01-7-7v-46a7 7 0 017-7h46m0-5h-46a12 12 0 00-12 12v46a12 12 0 0012 12h46a12 12 0 0012-12v-46a12 12 0 00-12-12z"
      />
      <g id="on-button-panel">
        <StyledOnButtonPanel
          className="cls-19"
          x={528.67}
          y={334.64}
          width={60}
          height={60}
          rx={7}
        />
        <path
          className="cls-14"
          d="M560.67 345.2v-2.89h-4v3a20 20 0 104-.1zm-1.5 35.94a16 16 0 01-2.5-31.8v11.3h4v-11.43a16 16 0 01-1.5 31.93z"
        />
      </g>
    </StyledOnButton>
  );
}

function Glove(props) {
  return (
    <StyledGlove
      onClick={() => {
        !props.isOvenOpen && props.setOvenOpen(true);
        props.setWiggle(true);
        props.copyIpsumToKeyboard();
      }}
      onAnimationEnd={() => props.setWiggle(false)}
      wiggle={props.wiggle}
      id="glove"
    >
      <path
        id="outline"
        className="cls-18"
        d="M1269.64 700.06a43.24 43.24 0 01-8.92-1c-38.68-8.22-57.08-16.63-65.64-30-8.14-12.72-6.12-28.73-2.59-50.45-5.41 9.32-12.87 16.34-23 16.34a25 25 0 01-9.84-2.16c-15.54-6.65-16-33.87-1.49-83.21 9.5-32.27 22.46-63.51 24.15-67.53l28.47-129.33L1363 377.33l-1.16 5.18c-.14.61-13.77 61.65-29.76 140.38-4 19.48-6.67 40.58-9.28 61-7.67 59.75-14.92 116.19-53.19 116.19z"
      />
      <g id="glove-color">
        <path
          id="outline-2"
          data-name="outline"
          className="cls-18"
          d="M1208.49 403.06c-3.39-4.23-32.94-42.16-26.57-70.94 2.3-10.39 8.86-18.52 19-23.51a45 45 0 0119.82-5.1 31.61 31.61 0 0117 4.81c18.64 11.64 22.7 40.23 22.66 49.33-.05 10.16-7.05 32.57-8.45 37l-1.77 5.55-20.55-6.56-17.47 14zm12.17-76.27c-2.61 0-5.79.92-9.45 2.73s-5.76 4.2-6.52 7.63c-3.13 14.12 13.46 40.68 22 51.33l2 2.44 1.09-3.41c3.53-11.05 7.33-25.74 7.34-30 0-5.32-3.44-24.3-11.69-29.45a8.67 8.67 0 00-4.77-1.27z"
        />
        <path
          id="handle"
          d="M1213 399.42c-1.28-1.6-31.32-39.43-25.43-66 1.93-8.73 7.27-15.3 15.85-19.54 14.82-7.32 25.13-4.36 31.18-.58 16.66 10.41 19.94 37.64 19.91 44.36 0 9.5-7.34 32.61-8.17 35.21l-11.11-3.54c2.94-9.18 7.6-25.91 7.62-31.72 0-5.59-3.36-27.51-14.43-34.42-5.21-3.25-11.69-2.88-19.83 1.14-5.34 2.64-8.49 6.43-9.63 11.6-3.9 17.56 15.38 46.55 23.13 56.23z"
          fill="#931f1f"
        />
        <path
          className="cls-1"
          d="M1214.93 358.41l-27.56 125.16s-55.88 131.6-25.48 144.63c31.54 13.52 39.3-55.57 39.3-55.57s5-10 .22 23.5c-8.78 61.85-22.63 80.33 60.68 98 54.1 11.5 49.26-92.6 65.45-172.29s29.78-140.47 29.78-140.47z"
        />
        <path
          className="cls-18"
          d="M1225.71 582.27l1-4.65 8.33 1.74-7-8.31 1.15-5.52 9 10.69 15.31-6.46-1.13 5.45-12.3 5.21 10.74 2.24-1 4.65zM1237.54 554.75a9.71 9.71 0 012.26-4.5 9.36 9.36 0 014.16-2.76 9.45 9.45 0 015-.27 9.69 9.69 0 014.47 2.25 9.19 9.19 0 012.72 4.14 9.55 9.55 0 01.24 5 9.11 9.11 0 01-4.1 6 9.69 9.69 0 01-13.56-3.2 9.14 9.14 0 01-1.19-6.66zm4.24.8a4.71 4.71 0 00.73 3.79 5.28 5.28 0 003.43 2.17 5.38 5.38 0 004.07-.59 4.68 4.68 0 002.17-3.18 4.77 4.77 0 00-.73-3.81 5.32 5.32 0 00-3.47-2.18 5.24 5.24 0 00-4 .59 4.75 4.75 0 00-2.2 3.21zM1241.68 537.24l2 .41a8.45 8.45 0 01-1.27-3 7.6 7.6 0 010-3.15 7.93 7.93 0 013.89-5.39 9.74 9.74 0 017.29-1 9.5 9.5 0 016.15 3.92 8.15 8.15 0 011.44 6.56 7.73 7.73 0 01-1.15 2.76 9 9 0 01-2.35 2.27l8.43 1.76-.93 4.45-24.42-5.09zm4.66-4a4.8 4.8 0 00.72 3.82 5.29 5.29 0 003.48 2.19 5.53 5.53 0 004.15-.59 4.75 4.75 0 002.2-3.21 4.64 4.64 0 00-.77-3.77 5.47 5.47 0 00-3.52-2.21 5.39 5.39 0 00-4.06.6 4.69 4.69 0 00-2.2 3.22zM1238.39 516.19a2.79 2.79 0 011.28-1.84 2.85 2.85 0 012.24-.42 2.89 2.89 0 011.88 1.27 2.89 2.89 0 01-.86 4 2.93 2.93 0 01-2.27.41 2.93 2.93 0 01-2.27-3.45zm6.89 3.78l.94-4.48 17.88 3.73-.94 4.49zM1261.05 495.64l-3 14.41a4.88 4.88 0 003.38-1 5.31 5.31 0 001.85-3.22 6.11 6.11 0 00-.86-4.69l2.57-3.41a9.15 9.15 0 012.26 4 10.85 10.85 0 010 4.88 9.5 9.5 0 01-4.09 6.3 9.26 9.26 0 01-7.2 1.26 9.58 9.58 0 01-6.24-4.06 9.05 9.05 0 01-1.32-7.18 9.38 9.38 0 014.14-6.3 10 10 0 017.69-1.16zm-4.47 3.75a4.57 4.57 0 00-2.8 1.24 5.16 5.16 0 00-1.57 2.84 5.45 5.45 0 00.37 3.51 5.85 5.85 0 002 2.13zM1251.35 490.92l.8-3.85 2.26.47a4.85 4.85 0 01-1.68-2.08 4.14 4.14 0 01-.22-2.41 4.29 4.29 0 01.85-1.73l3.56 2.21a3.13 3.13 0 00-.66 1.21 2.11 2.11 0 00.92 2c.75.65 2.38 1.24 4.87 1.76l.88.17 7.23 1.51-.93 4.45zM1283.21 468.44l-31-7.2a7.57 7.57 0 01-5.66-9.08l4.73-20.34a7.57 7.57 0 019.07-5.66l1.2.28.88-3.77v-.16l-1.2-.28a11.62 11.62 0 00-13.93 8.68l-4.72 20.34a11.62 11.62 0 008.67 13.93l31 7.19a11.61 11.61 0 0013.88-8.52l-3.93-.91a7.56 7.56 0 01-8.99 5.5zM1262.49 422.51l3.93.91a7.58 7.58 0 019-5.49l31 7.19a7.58 7.58 0 015.66 9.08l-4.73 20.34a7.57 7.57 0 01-9.08 5.66l-1.19-.28-.88 3.77a.75.75 0 010 .16l1.21.28a11.6 11.6 0 0013.92-8.67l4.73-20.35a11.61 11.61 0 00-8.68-13.92l-31-7.2a11.62 11.62 0 00-13.89 8.52z"
        />
        <path
          className="cls-18"
          d="M1261.65 443.93l3.85-16.58-3.93-.91-3.85 16.56a11.63 11.63 0 008.68 13.93l25.84 6a1 1 0 000-.16l.87-3.77-25.85-6a7.58 7.58 0 01-5.61-9.07z"
        />
        <path
          className="cls-18"
          d="M1261.57 426.44l3.93.91.88-3.77v-.16l-3.93-.91v.16zM1297.1 459.92l-3.94-.91-.87 3.77a1 1 0 010 .16l3.93.91a.75.75 0 000-.16z"
        />
      </g>
    </StyledGlove>
  );
}

function OvenBody(props) {
  return (
    <g id="oven-body">
      <g id="oven-top">
        <path className="cls-14" d="M229.83 392.89h903v68.93h-903z" />
        <path className="cls-8" d="M220.83 291.89h921v121h-921z" />
        <path
          className="cls-15"
          d="M964.86 392.3v1.2a3.27 3.27 0 01-3.48 3.5h-3.72v-14.69h3.53a3.27 3.27 0 013.48 3.5v.78a3 3 0 01-1.49 2.81 3 3 0 011.68 2.9zm-5-7.89v4h1a1.38 1.38 0 001.58-1.58v-1.05a1.25 1.25 0 00-1.37-1.36zm2.75 7.66a1.38 1.38 0 00-1.58-1.57h-1.17v4.41h1.38a1.26 1.26 0 001.37-1.37zM966.69 393.67v-8a3.57 3.57 0 017.14 0v8a3.57 3.57 0 01-7.14 0zm4.91 0v-8a1.34 1.34 0 10-2.68 0v8a1.34 1.34 0 102.68 0zM976.08 382.31h2.22v12.6h4V397h-6.19zM984 382.31h2.23v12.6h4V397H984zM991.91 382.31h6.32v2.1h-4.09v4.09h3.25v2.1h-3.25v4.31h4.09V397h-6.32zM999.51 388.56h5v2.19h-5zM1006.4 382.31h2.23V397h-2.23zM1011.06 382.31h3.49a3.27 3.27 0 013.48 3.5v1.73a3.27 3.27 0 01-3.48 3.5h-1.26v6h-2.23zm3.38 6.63a1.25 1.25 0 001.37-1.36v-1.81a1.25 1.25 0 00-1.37-1.36h-1.15v4.53zM1019.4 393.6v-.52l2.14-.23v.54c0 1.07.55 1.73 1.43 1.73a1.32 1.32 0 001.43-1.41c0-.93-.38-1.6-2-3.17-2.21-2.08-2.83-3.21-2.83-4.83 0-2.18 1.26-3.61 3.38-3.61s3.38 1.43 3.38 3.63v.38l-2.15.23v-.42c0-1.13-.44-1.72-1.21-1.72s-1.22.48-1.22 1.4.46 1.6 2 3.17c2.14 2.15 2.83 3.22 2.83 4.83a3.59 3.59 0 11-7.18 0zM1028.39 393.77v-11.46h2.22v11.46a1.24 1.24 0 102.48 0v-11.46h2.18v11.46a3.44 3.44 0 11-6.88 0zM1047.75 382.31V397h-2.23v-10.07l-2.08 10.07h-1.55l-2.08-10.07V397h-2.18v-14.69h3.15l1.93 9.38 1.84-9.38zM1049.6 388.56h5v2.19h-5zM1056.48 382.31h2.23V397h-2.23zM1061.15 382.31h2.45l2.84 9.87v-9.87h2.18V397h-2.35l-2.94-9.4v9.4h-2.18zM1075.45 393.75h-2.4l-.48 3.25h-2.23l2.44-14.69h3l2.42 14.69h-2.27zm-.3-2.14l-.9-6.15-.9 6.15zM1078.32 382.31h7.1v2.1H1083V397h-2.22v-12.59h-2.44zM1087 393.67v-8a3.57 3.57 0 017.14 0v8a3.57 3.57 0 01-7.14 0zm4.92 0v-8a1.35 1.35 0 10-2.69 0v8a1.35 1.35 0 102.69 0zM1101.34 397l-1.62-6.06h-1.15V397h-2.23v-14.69h3.49a3.27 3.27 0 013.48 3.5v1.62a3.33 3.33 0 01-1.53 3l1.87 6.57zm-2.77-8.16h1.15a1.26 1.26 0 001.37-1.37v-1.7a1.25 1.25 0 00-1.37-1.36h-1.15zM1111.42 385.48h-2.52v-1.56a3.72 3.72 0 003.19-1.61h1.55V397h-2.22zM1116.19 394.8h2.22v2.2h-2.22zM1120.76 393.67v-8a3.57 3.57 0 017.14 0v8a3.57 3.57 0 01-7.14 0zm4.92 0v-8a1.35 1.35 0 10-2.69 0v8a1.35 1.35 0 102.69 0zM939.31 384s-8 .78-9.27 7.94 9 6.37 14.8 5.69 8.19-6.95 3.82-10.54a13.9 13.9 0 00-9.35-3.09z"
        />
      </g>
      <path fill="#999A9A" d="M223.18 437.6h921v454h-921z" />
      <StyledInsideOven d="M311.68 516.6H1051v296H311.68z" />
      <StyledForeignObject x="312" y="516" width="100%" height="100%">
        <StyledTextarea
          isBaking={props.isBaking}
          isOvenOpen={props.isOvenOpen}
          ref={props.generatedIpsumRef}
          readOnly
        ></StyledTextarea>
      </StyledForeignObject>
    </g>
  );
}

function KitchenBackground() {
  return (
    <>
      <path fill="#2883DD" d="M0 291.89h1365v598H0z" />
      <path
        fill="#1B75E0"
        d="M.01 364.72h195v145H.01zM1174.71 364.37h190.21v475.67h-190.21zM.01 528.89h195v145H.01zM.01 695.04h195v145H.01z"
      />
      <circle className="cls-13" cx={1219.2} cy={342.06} r={13.28} />
    </>
  );
}

function OvenDoor(props) {
  return (
    <StyledOvenDoor
      isBaking={props.isBaking}
      onAnimationEnd={() => props.setIsBaking(false)}
      isOvenOpen={props.isOvenOpen}
      id="oven-door-outside"
    >
      <StyledInsideDoor
        isBaking={props.isBaking}
        isOvenOpen={props.isOvenOpen}
        fill="#808080"
        d="M223.18 350h921v94h-921z"
      />
      <path className="cls-8" d="M223.18 437.6h921v454h-921z" />
      <path
        className="cls-14"
        d="M314.02 526.76h739.32v296.21H314.02zM471.68 467.1h424v36h-424z"
      />
      <g id="oven-glass">
        <StyledGlass
          isBaking={props.isBaking}
          isOvenOpen={props.isOvenOpen}
          d="M314.02 543.25h739.32v279.5H314.02z"
        />
        <StyledShine
          isBaking={props.isBaking}
          isOvenOpen={props.isOvenOpen}
          className="cls-20"
          d="M409.97 822.6l212.99-279.42 49.15-.19-211.25 279.98-50.89-.37zM548.59 822.6L764.7 543.36h188.55L741.8 822.79l-193.21-.19z"
        />
      </g>
    </StyledOvenDoor>
  );
}

function Oven() {
  const [isLinksActive, setIsLinksActive] = useState(false);
  const [isTitleActive, setIsTitleActive] = useState(false);
  const [wiggle, setWiggle] = useState(false);
  const [isOvenOpen, setIsOvenOpen] = useState(false);
  const [isBaking, setIsBaking] = useState(false);
  const generatedIpsumRef = useRef(null);

  const copyIpsumToKeyboard = () => {
    console.log(generatedIpsumRef.current);
    const ipsum = generatedIpsumRef.current.innerHTML;
    navigator.clipboard.writeText(ipsum);
  };

  function generateIpsum(paragraphs, wordsPerParagraph) {
    let ipsum = '';
    for (let parNum = 0; parNum < paragraphs; parNum++) {
      let amountOfLinks = isLinksActive
        ? Math.floor(wordsPerParagraph / 20)
        : 0;
      // Have 1 link if less than 20 words per paragraph
      amountOfLinks = amountOfLinks && isLinksActive ? amountOfLinks : 1;
      ipsum += isTitleActive ? '<h1>Bolle-tittel</h1>' : '';
      ipsum += '<p>';
      for (let wordNum = 0; wordNum < wordsPerParagraph; wordNum++) {
        ipsum += !wordNum
          ? boller[wordNum].slice(0, 1).toUpperCase() +
            boller[wordNum].slice(1, boller[wordNum].length) +
            ' '
          : boller[wordNum] + ' ';
        // Sprinkle links
        ipsum +=
          isLinksActive && amountOfLinks > 0 && !(wordNum % 20)
            ? '<a href="http://bolleipsum.no/">Bolle ipsum!</a> '
            : '';
        amountOfLinks -= isLinksActive ? 1 : 0;
      }
      ipsum += '</p>';
    }
    return ipsum;
  }

  function bakeIpsum() {
    // <BolleIpsumGenerator isLinksActive={props.isLinksActive} isTitleActive={props.isTitleActive} isOvenOpen={props.isOvenOpen}/>
    generatedIpsumRef.current.innerHTML = generateIpsum(2, 17);
  }

  return (
    <OvenWrapper>
      <Header>
        <h1>Bolle ipsum</h1>
        <h3>Lag deg rykende fersk bolle ipsum!</h3>
      </Header>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1365 889.89"
      >
        <defs>
          <radialGradient id="glass-gradient">
            <stop offset="10%" stopColor="#e7c87b" />
            <stop offset="90%" stopColor="#F49100" />
          </radialGradient>
          <radialGradient
            id="radial-gradient"
            cx={383.11}
            cy={203.59}
            r={43}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.06} stopColor="#efc481" />
            <stop offset={1} stopColor="#c27b43" />
          </radialGradient>
          <radialGradient
            id="radial-gradient-2"
            cx={579.57}
            cy={210.41}
            r={45.75}
            xlinkHref="#radial-gradient"
          />
          <radialGradient
            id="radial-gradient-3"
            cx={1014.3}
            cy={216.13}
            r={45.13}
            xlinkHref="#radial-gradient"
          />
          <radialGradient
            id="radial-gradient-4"
            cx={780.91}
            cy={210.35}
            r={44.68}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.06} stopColor="#efc481" />
            <stop offset={0.56} stopColor="#d79e60" />
            <stop offset={1} stopColor="#c27b43" />
          </radialGradient>
          <clipPath id="clip-path">
            <path
              className="cls-1"
              d="M1214.93 358.41l-27.56 125.16s-55.88 131.6-25.48 144.63c31.54 13.52 39.3-55.57 39.3-55.57s5-10 .22 23.5c-8.78 61.85-22.63 80.33 60.68 98 54.1 11.5 49.26-92.6 65.45-172.29s29.78-140.47 29.78-140.47z"
            />
          </clipPath>
          <style>
            {
              '.cls-1{fill:#b52828}.cls-4{fill:#c27338}.cls-8{fill:#adadad}.cls-10{fill:#333}.cls-12{fill:#dcda68}.cls-13{fill:#191919}.cls-14{fill:gray}.cls-15,.cls-16{fill:#717272}.cls-18,.cls-20{fill:#fff}.cls-19{fill:#ccc}.cls-20{opacity:.16}.cls-23{fill:none;stroke:#931f1f;stroke-miterlimit:10;stroke-width:6px}.cls-24{fill:#5d3815}'
            }
          </style>
        </defs>
        <Boller />
        <KitchenBackground />
        <OvenBody
          isTitleActive={isTitleActive}
          isBaking={isBaking}
          isLinksActive={isLinksActive}
          generatedIpsumRef={generatedIpsumRef}
        />
        <ControllerText />
        <OnButton
          isBaking={isBaking}
          setIsBaking={setIsBaking}
          isOvenOpen={isOvenOpen}
          setIsOvenOpen={setIsOvenOpen}
          bakeIpsum={bakeIpsum}
        />
        <TitleController
          isTitleActive={isTitleActive}
          setIsTitleActive={setIsTitleActive}
        />
        <LinkController
          isLinksActive={isLinksActive}
          setIsLinksActive={setIsLinksActive}
        />
        <OvenDoor
          isBaking={isBaking}
          setIsBaking={setIsBaking}
          isOvenOpen={isOvenOpen}
        />
        <Glove
          setOvenOpen={setIsOvenOpen}
          isOvenOpen={isOvenOpen}
          copyIpsumToKeyboard={copyIpsumToKeyboard}
          setWiggle={setWiggle}
          wiggle={wiggle}
        />
        <path id="countertop" fill="#1d1a19" d="M0 247.89h1365v45H0z" />
      </svg>
    </OvenWrapper>
  );
}

export default Oven;

const StyledForeignObject = styled.foreignObject`
  z-index: -100;
  position: relative;
`;

const StyledTextarea = styled.div`
  filter: ${(props) => (props.isBaking ? 'blur(20px)' : 'blur(0px)')};
  box-shadow: inset 0 0 10px 5px #00000042;
  border: none;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  padding: 15px;
  outline: none;
  resize: none;
  width: 709px;
  height: 252px;
  overflow: auto;
  overflow-x: hidden;
  & h1 {
    color: #bc7231;
    margin: auto 0 0 0;
  }
  & p {
    margin: 0 0 20px 0;
  }
  & a {
    color: white;
    font-weight: 600;
    text-decoration: none;
    position: relative;
    z-index: 1;
  }
  & a:hover:after {
    height: 30px;
    border-radius: 100%;
    border: 1px solid #7c4d21;
    left: -7px;
    right: 42px;
    bottom: -8px;
  }
  & a:after {
    transition: 0.3s;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    height: 8px;
    border: 0px solid #bc7a3e;
    background-color: #bc7a3e;
    z-index: -1;
    border-radius: 10px;
  }

  & ::selection {
    color: #272727;
    background: #2883dd;
  }
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background: #c3c3c3;
  }
  ::-webkit-scrollbar-thumb {
    background: #acacac;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #808080;
  }
`;

const StyledGlass = styled.path`
  transition: 0.5s ease;
  fill: ${(props) =>
    !props.isBaking || !props.isOvenOpen ? '#191919' : 'url(#glass-gradient)'};
`;

const OpenCloseInsideDoorAnimation = keyframes`
  0% {transform: translateY(0px);}
  20% {transform: translateY(100px);}
  80% {transform: translateY(100px);}
  100% {transform: translateY(0px);}
`;

const OpenCloseInsideDoorAnimationHelper = css`
  animation: ${OpenCloseInsideDoorAnimation} 1.2s ease-in-out;
`;

const StyledInsideDoor = styled.path`
  transition: 0.3s;
  ${(props) => props.isBaking && OpenCloseInsideDoorAnimationHelper};
  transform: ${(props) =>
    props.isOvenOpen ? 'translateY(0px)' : 'translateY(100px)'};
`;

const OpenCloseAnimation = keyframes`
  0% {
    transform: rotateX(-80deg);
    filter: brightness(70%);
  }
  20% {
    transform: rotateX(0deg);
    filter: brightness(100%);
  }
  80% {
    transform: rotateX(0deg);
    filter: brightness(100%);
  }
  100%{
    transform: rotateX(-80deg);
    filter: brightness(70%);
  }
`;

const OpenCloseAnimationHelper = css`
  animation: ${OpenCloseAnimation} 1.2s ease-in-out;
`;

const StyledOvenDoor = styled.g`
  ${(props) => props.isBaking && OpenCloseAnimationHelper};
  transition: 0.3s;
  transform: ${(props) =>
    !props.isOvenOpen ? 'rotateX(0deg)' : 'rotateX(-80deg)'};
  filter: ${(props) =>
    !props.isOvenOpen ? 'brightness(100%)' : 'brightness(70%)'};
  transform-box: fill-box;
  transform-origin: bottom center;
`;

const StyledInsideOven = styled.path`
  fill: #191919;
`;

const StyledShine = styled.path`
  transition: 0.3s;
  fill-opacity: ${(props) =>
    props.isOvenOpen || !props.isBaking ? '0.2' : '1'};
`;

const StyledControllerDial = styled.path`
  transition: 0.3s;
  transform-box: fill-box;
  transform-origin: center center;
`;

const StyledOnButtonPanel = styled.rect`
  transition: 0.3s;
  transform-box: fill-box;
  transform-origin: center center;
`;

const StyledOnButton = styled.g`
  cursor: pointer;
  &:hover ${StyledOnButtonPanel} {
    transform: scale(1.1);
  }
`;

const StyledController = styled.g`
  cursor: pointer;
  transform: ${(props) =>
    (props.isTitleActive && props.isTitleController) ||
    (props.isLinksActive && props.isLinkController)
      ? 'rotate(-90deg)'
      : 'rotate(0deg)'};
  transform-box: fill-box;
  transform-origin: center center;
  transition: 0.5s ease-in-out;
`;

const StyledText = styled.text`
  fill: white;
  font-size: 21px;
  font-family: 'Bebas Neue', cursive;
`;

const Header = styled.div`
  // color: #272727;
  color: white;
  text-align: center;
  position: fixed;
  width: 100%;
  height: 40%;
  z-index: -1;
  // background-image: linear-gradient(90deg, #291a11, #291a11);
  background-image: linear-gradient(90deg, #f18397, #fbb03b);
  // background-image: radial-gradient(#FDFF71,  #b9dcf8);
  & h1 {
    font-size: 5em;
    margin: 2% 0 0 0;
  }
  & h3 {
    font-size: 2em;
    font-weight: 600;
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    & h1 {
      font-size: 3em;
      margin: 1% 0 0 0;
    }
    & h3 {
      font-size: 2em;
      font-weight: 600;
      margin: 0 0 20% 0;
    }
  }
`;

const WiggleAnimation = keyframes`
    0% { transform: rotate(0deg);}
    20% { transform: rotate(-10deg);}
    40% { transform: rotate(5deg);}
    70% { transform: rotate(-2deg);}
    100% { transform: rotate(0deg);}
`;

const WiggleAnimationHelper = css`
  animation: ${WiggleAnimation} 1s ease-out;
`;

const StyledGlove = styled.g`
  ${(props) => props.wiggle && WiggleAnimationHelper};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: rotate(2deg);
    animation-play-state: paused;
  }
  transform-origin: 33% 10%;
  transform-box: fill-box;
`;

const OvenWrapper = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  & svg {
    width: 100%;
    height: 100%;
  }
`;
