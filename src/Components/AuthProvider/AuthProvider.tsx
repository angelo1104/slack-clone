import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/store";
import { auth } from "../../firebase/firebase";
import nookies from "nookies";
import { authActions } from "../../redux/authSlice";

interface Props{
  children: any;
}

function AuthProvider({children}: Props):JSX.Element {
  const state = useSelector((state:State)=> state);
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("state", state);
  },[state])

  useEffect(()=>{
    const unsubscribe = auth.onIdTokenChanged(async (user)=>{
      if (!user){
        dispatch(authActions.SET_USER(null));
        nookies.set(undefined, "user-token", "");
      }else {
        const token = await user.getIdToken();
        dispatch(authActions.SET_USER(null));
        nookies.set(undefined, "user-token", token)
      }
    })

    return ()=> unsubscribe()
  },[dispatch])

  useEffect(() => {
    const handle = setInterval(async () => {
      const user = auth.currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    // clean up setInterval
    return () => clearInterval(handle);
  }, []);

  return(
    <div>
      {children}
    </div>
  )
}

export default AuthProvider;