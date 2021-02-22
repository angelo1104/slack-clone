import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EmojiState {
  show: boolean;
}

const emojiSlice = createSlice({
  initialState: {
    show: false,
  },
  name: "emoji",
  reducers: {
    SET_SHOW(state: EmojiState, action: PayloadAction<boolean>) {
      return {
        ...state,
        show: action.payload,
      };
    },
  },
});

const { actions: emojiActions, reducer: emojiReducer } = emojiSlice;

export { emojiActions, emojiReducer };
