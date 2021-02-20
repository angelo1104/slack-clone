import Head from "next/head";
import { useSelector } from "react-redux";
import { State } from "../redux/store";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'

function Home(): JSX.Element {
  const {
    count: { count, update },
  } = useSelector((state: State) => state);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Let's build slack.
      </main>
    </div>
  );
}

export default Home;

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
// @ts-ignore
export const getServerSideProps = withAuthUserTokenSSR({})(async ({ AuthUser }) => {
  // Optionally, get other props.
  const token = await AuthUser.getIdToken()

  return {
    props: {
      thing: token
    }
  }
})

