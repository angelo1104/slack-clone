import React from "react";
import styled from "styled-components";
import { Create, KeyboardArrowDown } from "@material-ui/icons";
import SideBarOption from "./SideBarOption";

const SideBarContainer = styled.div`
  flex: 0.18;
  background-color: #3f0e3f;
  color: white;
  max-height: 100%;
  padding-right: 4px;
`;

const SideBarHead = styled.div`
  cursor: pointer;
  display: flex;
  padding: 6px 12px;
  align-items: center;
  justify-content: space-between;
  border-top: 0.5px solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);

  h2 {
    font-size: 15px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    width: fit-content;
    display: flex;
    align-items: center;

    .MuiSvgIcon-root {
      font-size: 20px;
    }
  }

  .create-icon {
    background-color: white;
    color: #350d36 !important;
    border-radius: 100%;
    padding: 8px;
    font-size: 37px;
  }

  :hover {
    background-color: var(--slack-color);

    .create-icon {
      color: var(--slack-color);
    }
  }
`;

const SideBarMain = styled.div`
  padding: 10px 0;
  height: 100%;
  overflow-y: scroll;

  :hover {
    ::-webkit-scrollbar {
      display: block;
    }
  }

  ::-webkit-scrollbar {
    width: 7px;
    display: none;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    margin: auto 3px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

function SideBar(): JSX.Element {
  return (
    <SideBarContainer>
      <SideBarHead>
        <h2>
          Flutter Community
          <KeyboardArrowDown />
        </h2>

        <Create className={"create-icon"} />
      </SideBarHead>

      <SideBarMain>
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
        <SideBarOption title={"Hello"} />
      </SideBarMain>
    </SideBarContainer>
  );
}

export default SideBar;
