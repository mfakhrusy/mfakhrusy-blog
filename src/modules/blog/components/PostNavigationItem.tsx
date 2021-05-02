import Link from "next/link";
import { Post } from "@/utils/posts";
import { PostThumbnail } from "./PostThumbnail";
import { Flex, Text } from "@chakra-ui/react";
import { Spacer } from "@/src/components/Spacer";

type Props = {
  post: Post;
};

export function PostNavigationItem({ post }: Props): JSX.Element {
  return (
    <Link href={"/[slug]"} as={`/${post.slug}`}>
      <Flex flexDirection="column" cursor="pointer">
        <PostThumbnail fileName={post.frontmatter.thumbnail} slug={post.slug} />
        <Spacer height="30px" />
        <Text maxWidth="500px">{post.frontmatter.title}</Text>
      </Flex>
    </Link>
  );
}
