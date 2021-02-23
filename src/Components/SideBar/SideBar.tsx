import React, { useEffect } from "react";
import styled from "styled-components";
import { Create, Add, KeyboardArrowDown } from "@material-ui/icons";
import SideBarOption from "./SideBarOption";
import { db } from "../../firebase/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { AppDispatch, State } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../redux/chatSlice";
import Spinner from "../Spinner/Spinner";

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
  height: 10%;
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
    margin: auto;
    line-break: strict;
    white-space: nowrap;

    .MuiSvgIcon-root {
      font-size: 20px;
      margin: 0;
    }
  }

  .create-icon {
    background-color: white;
    color: #350d36 !important;
    border-radius: 100%;
    padding: 8px;
    font-size: 37px;
    margin-left: 10px;
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
  width: 100%;
  //noinspection CssInvalidPropertyValue
  overflow-y: overlay;

  :hover {
    ::-webkit-scrollbar {
      display: block;
    }
  }

  ::-webkit-scrollbar {
    width: 7px;
    display: none;
    position: absolute;
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

const Divider = styled.div`
  margin-top: 5px;
  border-top: 0.3px solid rgba(255, 255, 255, 0.2);
`;

function SideBar(): JSX.Element {
  const [chatRooms, loading, error] = useCollection(db.collection("rooms"));
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(chatActions.SET_LOADING(loading));
  }, [loading]);

  return (
    <SideBarContainer>
      {loading && <Spinner />}
      <SideBarHead>
        <h2>
          Flutter Community
          <KeyboardArrowDown />
        </h2>

        <Create className={"create-icon"} />
      </SideBarHead>

      <SideBarMain>
        <SideBarOption
          title={"Channels"}
          Icon={Add}
          onClick={() => {
            const channelName = prompt("Enter the chat room name.");

            db.collection("rooms")
              .add({
                name: channelName,
              })
              .catch((e) => console.log(e));
          }}
        />
        {chatRooms?.docs?.map((doc: any, index: number) => {
          if (index === 0)
            dispatch(
              chatActions.SET_ROOM({
                roomId: doc.id,
                roomName: doc.data().name,
              }),
            );
          return (
            <SideBarOption
              key={doc.id}
              title={doc.data().name}
              Icon={"#"}
              bold={true}
              onClick={() => {
                dispatch(
                  chatActions.SET_ROOM({
                    roomId: doc.id,
                    roomName: doc.data().name,
                  }),
                );
              }}
            />
          );
        })}
        <Divider />
      </SideBarMain>
    </SideBarContainer>
  );
}

export default SideBar;
