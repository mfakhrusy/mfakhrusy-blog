import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";

import { Layout } from "../components/Layout";
import { chakraTheme } from "../lib/theme/chakraTheme";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
      </Head>
      <ChakraProvider theme={chakraTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
