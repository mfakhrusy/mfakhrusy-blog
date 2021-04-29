import { Category, Post } from "@/utils/posts";
import { Flex } from "@chakra-ui/react";
import PostExcerptView from "./PostExcerptView";

type Props = {
  posts: Array<Post>;
  categoryFilter?: Category;
};

const isDevelopment = process.env.NEXT_PUBLIC_NODE_ENV === "development";

export function AllPostsView({ posts, categoryFilter }: Props): JSX.Element {
  console.log(categoryFilter);

  return (
    <Flex flexDirection="column">
      {posts
        .filter(({ frontmatter: { status } }) => {
          if (isDevelopment) {
            return status === "draft" || status === "active";
          } else {
            return status === "active";
          }
        })
        .map(({ frontmatter, slug }, index) => (
          <PostExcerptView frontmatter={frontmatter} slug={slug} key={index} />
        ))}
    </Flex>
  );
}
