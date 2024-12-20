// Install styled-components: npm install styled-components
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for curtain animation
const openCurtain = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const closeCurtain = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const CurtainLeft = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background:#bf0019; /* Semi-transparent red */
  z-index: 10;
  transform: translateX(0);
  animation: ${(props) => (props.open ? openCurtain : "none")} 3s forwards ease-in-out;
`;

const CurtainRight = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: #bf0019; /* Semi-transparent red */
  z-index: 10;
  transform: translateX(0);
  animation: ${(props) => (props.open ? closeCurtain : "none")} 3s forwards ease-in-out;
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