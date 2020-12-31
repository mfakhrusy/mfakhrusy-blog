import Head from 'next/head';
import { attributes, react as HomeContent } from 'content/home.md';
import { Test } from 'src/components/Test';

function Home() {
  const { title, authors } = attributes;
  return (
  <>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
    <article>
      <h1>{title}</h1>
      <HomeContent />
      <Test />
    </article>
  </>
  )
};

export default Home;
