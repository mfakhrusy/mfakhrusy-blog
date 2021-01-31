import { Flex } from "@chakra-ui/react";
import { Post } from "@/utils/posts";
import { PostNavigationItem } from "./PostNavigationItem";

type Props = {
  previousPost: Post;
  nextPost: Post;
};

export function PostNavigationView({
  previousPost,
  nextPost,
}: Props): JSX.Element {
  return (
    <Flex justifyContent="space-between">
      {previousPost && <PostNavigationItem post={previousPost} />}
      {nextPost && <PostNavigationItem post={nextPost} />}
    </Flex>
  );
}
