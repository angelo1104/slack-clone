import User from "../firebase/firebase";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SliceState {
  user: User | null;
}

const authSlice: any = createSlice({
  name: "auth",
  initialState: {
    user: null
  },
  reducers: {
    SET_USER(state: SliceState, action: PayloadAction<any>){
      return{
        ...state,
        user: action.payload
      }
    }
  }
});

const { actions: authActions, reducer: authReducer } = authSlice;

export {authActions, authReducer}