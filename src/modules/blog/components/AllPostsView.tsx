import { Post } from "@/utils/posts";
import { Flex } from "@chakra-ui/react";
import PostExcerptView from "./PostExcerptView";

type Props = {
  posts: Array<Post>;
};

export function AllPostsView({ posts }: Props): JSX.Element {
  return (
    <Flex flexDirection="column">
      {posts
        .filter(({ frontmatter: { status } }) => status === "active")
        .map(({ frontmatter, slug }) => (
          <PostExcerptView frontmatter={frontmatter} slug={slug} />
        ))}
    </Flex>
  );
}
