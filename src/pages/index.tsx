import Head from "next/head";
import Header from "../Components/Header/Header";
import { wrapper } from "../redux/store";
import { verifyUser } from "../firebase/firebaseAdmin";
import styled from "styled-components";
import SideBar from "../Components/SideBar/SideBar";

const AppBody = styled.div`
  display: flex;
  height: 93vh;
`;

function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <AppBody>
          <SideBar />
        </AppBody>
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
