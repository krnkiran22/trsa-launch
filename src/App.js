// Install styled-components: npm install styled-components
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for smooth and realistic curtain animation
const realisticLeftCurtain = keyframes`
  0% {
    transform: translateX(0) skewX(0deg);
  }
  20% {
    transform: translateX(-10%) skewX(-3deg);
  }
  40% {
    transform: translateX(-30%) skewX(2deg);
  }
  60% {
    transform: translateX(-60%) skewX(-1deg);
  }
  80% {
    transform: translateX(-80%) skewX(1deg);
  }
  100% {
    transform: translateX(-100%) skewX(0deg);
  }
`;

const realisticRightCurtain = keyframes`
  0% {
    transform: translateX(0) skewX(0deg);
  }
  20% {
    transform: translateX(10%) skewX(3deg);
  }
  40% {
    transform: translateX(30%) skewX(-2deg);
  }
  60% {
    transform: translateX(60%) skewX(1deg);
  }
  80% {
    transform: translateX(80%) skewX(-1deg);
  }
  100% {
    transform: translateX(100%) skewX(0deg);
  }
`;

const CurtainLeft = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, #8b0000, #bf0019);
  z-index: 10;
  transform: translateX(0);
  animation: ${(props) => (props.open ? realisticLeftCurtain : "none")} 3s forwards ease-in-out;
  box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.5);
  border-right: 2px solid rgba(0, 0, 0, 0.2);
`;

const CurtainRight = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, #bf0019, #8b0000);
  z-index: 10;
  transform: translateX(0);
  animation: ${(props) => (props.open ? realisticRightCurtain : "none")} 3s forwards ease-in-out;
  box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.5);
  border-left: 2px solid rgba(0, 0, 0, 0.2);
`;

const LaunchButton = styled.button`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 40px;
  font-size: 20px;
  color: white;
  background-color: green;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 20;

  &:hover {
    background-color: darkgreen;
  }
`;

const IframeContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const App = () => {
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleLaunch = () => {
    setShowButton(false);
    setOpen(true);
    setTimeout(() => {
      window.location.href = "https://thiruvallurskate.in"; // Replace with your URL
    }, 3000);
  };

  return (
    <div>
      <IframeContainer>
        <iframe src="https://thiruvallurskate.in" title="Deployed Website" />
      </IframeContainer>
      <CurtainLeft open={open} />
      <CurtainRight open={open} />
      {showButton && <LaunchButton onClick={handleLaunch}>Launch</LaunchButton>}
    </div>
  );
};

export default App;
