import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  roomName: string;
  roomId: string;
  messages: Array<ChatMessage>;
  loading: boolean;
  messageId: string;
  thread: boolean;
  dark: boolean;
}

interface Message {
  message: string;
  user: string;
  userPhoto: string;
  userId: string;
  messageId: string;
}

interface ChatMessage {
  message: string;
  user: string;
  userPhoto: string;
  userId: string;
  messageId: string;
  thread: Array<Message>;
}

const initialState: ChatState = {
  roomName: "",
  roomId: "",
  messages: [],
  loading: false,
  messageId: "",
  thread: false,
  dark: false,
};

const chatSlice = createSlice({
  initialState,
  name: "chat",
  reducers: {
    SET_ROOM(
      state: ChatState,
      action: PayloadAction<{
        roomName: string;
        roomId: string;
      }>,
    ) {
      return {
        ...state,
        roomName: action.payload.roomName,
        roomId: action.payload.roomId,
      };
    },
    SET_LOADING(state: ChatState, action: PayloadAction<boolean>) {
      return {
        ...state,
        loading: action.payload,
      };
    },
    SET_MESSAGES(state: ChatState, action: PayloadAction<Array<ChatMessage>>) {
      return {
        ...state,
        messages: action.payload,
      };
    },
    SET_MESSAGE_ID(state: ChatState, action: PayloadAction<string>) {
      return {
        ...state,
        messageId: action.payload,
      };
    },
    SET_THREAD(state: ChatState, action: PayloadAction<boolean>) {
      return {
        ...state,
        thread: action.payload,
      };
    },
    SET_DARK(state: ChatState, action: PayloadAction<boolean>) {
      return {
        ...state,
        dark: action.payload,
      };
    },
  },
});

const { actions: chatActions, reducer: chatReducer } = chatSlice;

export { chatReducer, chatActions };

export type { ChatState };
