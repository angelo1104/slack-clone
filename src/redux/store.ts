import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { authReducer } from "./authSlice";
import User from "../firebase/firebase";
import { emojiReducer, EmojiState } from "./emojiSlice";
import { chatReducer, ChatState } from "./chatSlice";

export interface State {
  init: any;
  auth: {
    user: User | null;
  };
  emoji: EmojiState;
  chat: ChatState;
}

const reducer = combineReducers({
  auth: authReducer,
  emoji: emojiReducer,
  chat: chatReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    // Attention! This will overwrite client state! Real apps should use proper reconciliation.
    // Read more about it here https://bit.ly/2ZsXbwA.
    const nextState = {
      ...state,
      ...action.payload,
    };

    if (state.chat.roomId) nextState.chat.roomId = state.chat.roomId;
    if (state.chat.roomName) nextState.chat.roomName = state.chat.roomName;

    return nextState;
  } else {
    return reducer(state, action);
  }
};

const store = configureStore({
  reducer: rootReducer,
});

// create a makeStore function
const makeStore: any = () => store;

// export an assembled wrapper
export const wrapper = createWrapper<State>(makeStore, { debug: true });
export type AppDispatch = typeof store.dispatch;
