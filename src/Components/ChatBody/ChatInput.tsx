import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "@material-ui/core";
import { Picker } from "emoji-mart";
import { InsertEmoticon, Send } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, State } from "../../redux/store";
import { emojiActions } from "../../redux/emojiSlice";

const InputContainer = styled.div`
  width: 97%;
  margin: auto;
  border: 1px solid gray;
  display: flex;
  padding: 5px 10px;
  border-radius: 3px;
  justify-content: space-between;

  * {
    margin: auto 3px;
  }

  .chat-input {
    flex: 0.96;
    padding: 5px 10px;
  }

  .insert-emoji {
    color: gray;
    cursor: pointer;
    border-radius: 3px;
    padding: 4px;
    font-size: 32px;
    font-weight: 300 !important;
    transition: color 80ms ease-in, background-color 100ms ease-in;

    :hover {
      color: black;
      background-color: #f6f6f6;
    }
  }

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

const InputWrapper = styled.div`
  width: 100%;
  padding: 15px 0;
  height: 15%;
  background-color: white;
`;

const Emoji = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function ChatInput(): JSX.Element {
  const { show } = useSelector((state: State) => state.emoji);
  const [message, setMessage] = useState<string>("");

  const dispatch: AppDispatch = useDispatch();

  return (
    <InputWrapper>
      <InputContainer>
        <Input
          multiline={true}
          className={"chat-input"}
          disableUnderline={true}
          placeholder={"Message # anjali-baby"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Icons>
          <Emoji>
            <Picker
              sheetSize={32}
              set={"apple"}
              onSelect={(emoji) =>
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                setMessage((message) => message + emoji.native)
              }
              style={{
                position: "absolute",
                transform: "translate(-90%, -105%)",
                visibility: show ? "visible" : "hidden",
              }}
            />
            <InsertEmoticon
              className={"insert-emoji"}
              onClick={() => dispatch(emojiActions.SET_SHOW(!show))}
            />
          </Emoji>

          <IconButton disabled={message.length === 0}>
            <Send className={"send-icon"} />
          </IconButton>
        </Icons>
      </InputContainer>
    </InputWrapper>
  );
}

export default ChatInput;
