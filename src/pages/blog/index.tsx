import { GetStaticProps } from "next";
import { SEO } from "@/src/components/SEO";
import { getSortedPosts, Post } from "@/utils/posts";
import { AllPostsView } from "@/src/modules/blog";
import { Flex } from "@chakra-ui/react";

type Props = {
  posts: Array<Post>;
};

export default function Home({ posts }: Props): JSX.Element {
  return (
    <>
      <SEO title="All posts" />
      <Flex flexDirection="column" alignItems="center" width="100%">
        <AllPostsView posts={posts} />
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
