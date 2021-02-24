import React, { useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Button as MaterialButton } from "@material-ui/core";
import { auth, Provider } from "../firebase/firebase";
import { log } from "util";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "../Components/Spinner/Spinner";
import { useRouter } from "next/router";

const Container = styled.div`
  background-color: rgba(128, 128, 128, 0.1);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: -1px 1px 20px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;

  .slack-logo {
    width: 100px;
    margin: auto;
  }
`;

const Button = styled(MaterialButton)`
  color: white !important;
  font-weight: 600 !important;
  background-color: #2db67e !important;
  text-transform: none !important;
  margin: 40px auto 20px !important;
`;

function Login() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace("/");
      }
    }
  }, [loading, user]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Container>
        {loading && <Spinner />}
        <LoginContainer>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt="slack-logo"
            className={"slack-logo"}
          />

          <Button
            onClick={() => {
              auth
                .signInWithPopup(Provider)
                .then((user) => console.log("success", user))
                .catch((err) => console.log(err));
            }}
          >
            Login with Google
          </Button>
        </LoginContainer>
      </Container>
    </div>
  );
}

export default Login;
