import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "@material-ui/core";
import { InsertEmoticon, Send } from "@material-ui/icons";
import { Picker } from "emoji-mart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, State } from "../../redux/store";
import { emojiActions } from "../../redux/emojiSlice";
import { db } from "../../firebase/firebase";
import firebase from "firebase";

const Container = styled.div`
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Div = styled.div`
  padding: 10px;
`;

const Options = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  position: relative;

  .send-icon {
    cursor: pointer;
    border-radius: 3px;
    padding: 4px;
    font-size: 30px;
    font-weight: 300 !important;
    transition: color 80ms ease-in, background-color 100ms ease-in;
    color: white;
    background-color: #3a8667;
  }
`;

const IconButton = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  padding: 0;
  outline-width: 0;
  background-color: white;

  :disabled {
    .send-icon {
      color: gray;
      background-color: white;
    }
  }
`;

const Icon = styled.button`
  outline-width: 0;
  padding: 0;
  border: none;
  color: gray;
  padding: 4px;
  transition: 80ms color ease-in, 80ms background-color ease-in;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  border-radius: 3px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;

  :hover {
    color: black;
    background-color: rgba(128, 128, 128, 0.1);
  }
`;

const SlackInput = styled(Input)`
  font-size: 15px;

  ::placeholder {
    font-size: 15px;
  }
`;

const EmojiPicker = styled(Picker)`
  height: 70% !important;
  position: absolute !important;
`;

function ThreadInput() {
  const [message, setMessage] = useState("");
  const { messageId, roomId } = useSelector((state: State) => state.chat);
  const dispatch: AppDispatch = useDispatch();
  const {
    emoji: { threadShow: show },
  } = useSelector((state: State) => state);

  const sendMessage = async () => {
    try {
      if (message !== "") {
        const copyMessage = message;
        setMessage("");

        const timestamp = firebase.firestore.FieldValue.serverTimestamp();

        await db
          .collection("rooms")
          .doc(roomId)
          .collection("messages")
          .doc(messageId)
          .collection("threads")
          .add({
            user: "ishika",
            userId: "jello",
            message: copyMessage,
            userPhoto:
              "https://i.pinimg.com/originals/de/7f/ed/de7fedb94947ade7029b7a8b08cd676a.jpg",
            timestamp: timestamp,
          });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (message.length !== 0) {
        sendMessage();
      }
    }
  };

  return (
    <Div>
      <Container>
        <SlackInput
          multiline={true}
          placeholder={"Reply..."}
          disableUnderline={true}
          value={message}
          onKeyDown={handleKeyDown}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Options>
          <EmojiPicker
            sheetSize={32}
            style={{
              position: "absolute",
              transform: "translate(0, -113.5%)",
              display: show ? "" : "none",
            }}
            onSelect={(emoji) =>
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              setMessage((message) => message + emoji.native)
            }
          />
          <Icon
            onClick={() => {
              dispatch(emojiActions.SET_THREAD_SHOW(!show));
            }}
          >
            <InsertEmoticon />
          </Icon>
          <IconButton disabled={message === ""} onClick={() => sendMessage()}>
            <Send className={"send-icon"} />
          </IconButton>
        </Options>
      </Container>
    </Div>
  );
}

export default ThreadInput;
