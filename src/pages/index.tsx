import { GetStaticProps } from "next";
import { SEO } from "@/src/components/SEO";
import { Category, getSortedPosts, Post } from "@/utils/posts";
import { AllPostsView } from "@/src/modules/blog";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

type Query = {
  category?: Category;
};

type Props = {
  posts: Array<Post>;
};

export default function Home({ posts }: Props): JSX.Element {
  const router = useRouter();
  const query = router.query as Query;

  return (
    <>
      <SEO title="All posts" />
      <Flex flexDirection="column" alignItems="center" width="100%">
        <AllPostsView posts={posts} categoryFilter={query.category} />
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
