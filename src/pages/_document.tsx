import Document, { Head, Main, NextScript, Html } from "next/document";

import { getSiteMetaData } from "@/utils/helpers";

export default class MyDocument extends Document {
  render(): JSX.Element {
    const siteMetadata = getSiteMetaData();

    return (
      <Html lang={siteMetadata.language}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
