import { GetStaticProps } from "next";
import { SEO } from "@/src/components/SEO";
import { Category, getSortedPosts, Post } from "@/utils/posts";
import { AllPostsView } from "@/src/modules/blog";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCategoryStore } from "@/src/store/categoryStore";
import { useEffect } from "react";

type Query = {
  category: Category;
};

type Props = {
  posts: Array<Post>;
};

export default function Home({ posts }: Props): JSX.Element {
  const router = useRouter();
  const query = router.query as Query;
  const { activeCategory, setActiveCategory } = useCategoryStore();

  // set state on refresh (to keep the filter on)
  useEffect(() => {
    if (query.category) {
      setActiveCategory(query.category);
    }
  }, [query.category]);

  // set URL after changing category via header menu button
  useEffect(() => {
    router.push(`/?category=${activeCategory}`);
  }, [activeCategory]);

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
