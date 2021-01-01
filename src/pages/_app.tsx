import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { Layout } from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
