import React from "react";
import styled from "styled-components";

const SideBarOptionContainer = styled.div`
  cursor: pointer;
  padding: 7px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    background-color: var(--slack-color);
  }

  h4 {
    font-weight: 400;
    opacity: 0.9;
    font-size: 16px;
    margin: 0;
    flex: 1;
  }

  h5 {
    margin: 0 15% 0 auto;
    opacity: 0.9;
    font-weight: 400;
    font-size: 16px;

    .MuiSvgIcon-root {
      margin: 0;
    }
  }
`;

interface Props {
  title: string;
  Icon: any;
  onClick?: () => void;
  bold?: boolean;
}

function SideBarOption({ title, Icon, onClick, bold }: Props): JSX.Element {
  function truncate(source: string, size: number) {
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
  }

  return (
    <SideBarOptionContainer
      onClick={() => {
        if (onClick !== undefined) {
          onClick();
        }
      }}
    >
      {Icon === Icon + "" && (
        <h5 style={{ opacity: bold ? 1 : 0.9, fontWeight: bold ? 700 : 400 }}>
          {Icon}
        </h5>
      )}
      {Icon !== Icon + "" && (
        <h5 style={{ marginLeft: "-6px" }}>
          <Icon />
        </h5>
      )}
      <h4 style={{ opacity: bold ? 1 : 0.9, fontWeight: bold ? 700 : 400 }}>
        {truncate(title, 20)}
      </h4>
    </SideBarOptionContainer>
  );
}

export default SideBarOption;
