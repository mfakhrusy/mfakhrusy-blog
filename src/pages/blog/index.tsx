import { GetStaticProps } from "next";
import { SEO } from "@/src/components/SEO";
import { getSortedPosts, Post } from "@/utils/posts";
import { AllPostsView } from "@/src/modules/blog";

type Props = {
  posts: Array<Post>;
};

export default function Home({ posts }: Props): JSX.Element {
  return (
    <>
      <SEO title="All posts" />
      <AllPostsView posts={posts} />
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
