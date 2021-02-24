import React from "react";
import styled from "styled-components";

const App = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 100;
`;

function Spinner() {
  return (
    <div className={"slack-spinner-awesome"}>
      <App>
        <div className="container">
          <div className="shrink">
            <svg
              className="rotate"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="9.5 -14.5 104 104"
              xmlSpace="preserve"
            >
              <g className="st0">
                <line x1={39} y1={-3} x2={39} y2={78} />
              </g>
              <g className="st1">
                <line x1={21} y1={60} x2={102} y2={60} />
              </g>
              <g className="st2">
                <line x1={84} y1={78} x2={84} y2={-3} />
              </g>
              <g className="st3">
                <line x1={102} y1={15} x2={21} y2={15} />
              </g>
            </svg>
          </div>
          <div className="text">Connecting ...</div>
        </div>
      </App>
    </div>
  );
}

export default Spinner;
