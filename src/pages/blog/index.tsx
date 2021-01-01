import Link from "next/link";

import { SEO } from "@/src/components/SEO";
import { getSortedPosts, Post } from "@/utils/posts";
import { GetStaticProps } from "next";
import { Flex } from "@chakra-ui/react";
import dynamic from 'next/dynamic';

type Props = {
  posts: Array<Post>;
};

export default function Home({ posts }: Props): JSX.Element {
  return (
    <>
      <SEO title="All posts" />
      <Flex flexDirection="column">
      {posts.map(({ frontmatter: { title, description, date, thumbnail }, slug }) => (
        <article key={slug}>
          <header>
            <h3>
              <Link href={"/blog/[slug]"} as={`/blog/${slug}`}>
                <a>{title}</a>
              </Link>
            </h3>
            <span>{date}</span>
          </header>
          <section>
            <p>{description}</p>
          </section>
          {thumbnail && (
          <section>
            <img src={require(`../../../content/posts/${slug}/images/${thumbnail}`)} />
          </section>
          )}
        </article>
      ))}
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
};
