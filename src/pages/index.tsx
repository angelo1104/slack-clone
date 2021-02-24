import Head from "next/head";
import Header from "../Components/Header/Header";
import { wrapper } from "../redux/store";
import { verifyUser } from "../firebase/firebaseAdmin";
import styled from "styled-components";
import SideBar from "../Components/SideBar/SideBar";
import ChatBody from "../Components/ChatBody/ChatBody";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Spinner from "../Components/Spinner/Spinner";

const AppBody = styled.div`
  display: flex;
  height: 93vh;
`;

function Home(): JSX.Element {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (error) {
      router.replace("/login");
    } else {
      if (!loading && !user) {
        router.replace("/login");
      }
    }
  }, [error, user, loading]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {loading && <Spinner />}

        {!loading && <Header />}

        {!loading && (
          <AppBody>
            <SideBar />
            <ChatBody />
          </AppBody>
        )}
      </main>
    </div>
  );
}

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const { store, ...etc } = context;

    try {
      const token = await verifyUser(etc);

      return {
        props: {
          token,
        },
      };
    } catch (e) {
      return {
        props: {},
      };
    }
  },
);
