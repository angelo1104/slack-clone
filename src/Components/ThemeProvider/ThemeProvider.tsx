import React from "react";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";

const lightTheme = {
  sideBar: {
    background: "#3f0e3f",
    color: "white",
  },
  header: {
    background: "#3f0e3f",
    color: "white",
  },
  chat: {
    background: "white",
    color: "black",
  },
};

const darkTheme = {
  sideBar: {
    background: "#3f0e3f",
    color: "white",
  },
  header: {
    background: "#1A1D21",
    color: "white",
    parent: "",
  },
  chat: {
    background: "rgba(14, 14, 14, .95)",
    color: "#D1D2D3",
  },
};

const theme = {
  data: {
    lightTheme,
    darkTheme,
  },
};

interface Props {
  children: JSX.Element;
}

function Theme({ children }: Props) {
  const dark = useSelector((state: State) => state.chat.dark);

  return (
    <ThemeProvider theme={!dark ? theme.data.lightTheme : theme.data.darkTheme}>
      {children}
    </ThemeProvider>
  );
}

export default Theme;
