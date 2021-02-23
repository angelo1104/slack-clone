import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EmojiState {
  show: boolean;
  threadShow: boolean;
}

const emojiSlice = createSlice({
  initialState: {
    show: false,
    threadShow: false,
  },
  name: "emoji",
  reducers: {
    SET_SHOW(state: EmojiState, action: PayloadAction<boolean>) {
      console.log("show", action.payload);
      return {
        ...state,
        show: action.payload,
      };
    },
    SET_THREAD_SHOW(state: EmojiState, action: PayloadAction<boolean>) {
      return {
        ...state,
        threadShow: action.payload,
      };
    },
  },
});

const { actions: emojiActions, reducer: emojiReducer } = emojiSlice;

export { emojiActions, emojiReducer };

export type { EmojiState };
