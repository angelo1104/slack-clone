import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AccessTime, HelpOutline } from "@material-ui/icons";
import { createStyles, Switch, Theme, withStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, State } from "../../redux/store";
import { chatActions } from "../../redux/chatSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

const HeaderContainer = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: center;
  padding: 5px 0;
  align-items: center;
  justify-self: center;
  margin: auto;
  height: 7vh;
`;

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--slack-color);
  color: white;
  align-items: center;
  justify-content: center;

  .MuiSvgIcon-root {
    cursor: pointer;
    opacity: 0.8;
    padding: 2px 5px;
    border-radius: 4px;
    font-size: 32px;

    :hover {
      opacity: 1;
      background-color: rgb(73, 37, 74);
    }
  }
`;

const HeaderSearch = styled.input`
  height: 24px;
  flex: 0.9;
  cursor: pointer;
  outline-width: 0;
  background: rgb(67, 30, 68);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  color: white;
  padding: 3px 5px;
  margin: auto 15px;
  transition: border-bottom-color 100ms ease-in,
    border-right-color 100ms ease-in, border-top-color 100ms ease-in,
    border-left-color 100ms ease-in;

  :hover {
    background: rgb(73, 37, 74);
    box-shadow: inset 0 0 0 1px rgb(154 134 155);
    border: 1px solid rgba(255, 255, 255, 0.9);
  }

  ::placeholder {
    color: white;
    opacity: 0.7;
  }
`;

const HeaderAvatar = styled.img`
  height: 30px;
  cursor: pointer;
  border-radius: 3px;
  object-fit: cover;
  margin: auto 20px;

  :hover {
    opacity: 0.8;
  }
`;

const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: "#52d869",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#52d869",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  }),
)(({ classes, ...props }: any) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

function Header(): JSX.Element {
  const dark = useSelector((state: State) => state.chat.dark);
  const [user] = useAuthState(auth);
  const dispatch: AppDispatch = useDispatch();

  return (
    <HeaderDiv>
      <HeaderContainer>
        <AccessTime />
        <HeaderSearch type={"text"} placeholder={"Search Flutter Community"} />
        <HelpOutline />
      </HeaderContainer>

      {/*<IOSSwitch*/}
      {/*  onChange={(event: any) => {*/}
      {/*    dispatch(chatActions.SET_DARK(event.target.checked));*/}
      {/*  }}*/}
      {/*/>*/}

      <HeaderAvatar src={user?.photoURL} onClick={() => auth.signOut()} />
    </HeaderDiv>
  );
}

export default Header;
