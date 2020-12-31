import Head from "next/head";

export default function MyApp({Component, pageProps}) {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico?v=2" />
    </Head>
    <Component {...pageProps} />
    </>
  )
};
