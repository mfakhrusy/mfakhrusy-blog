import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import { Post } from "@/utils/posts";

type Props = {
  previousPost: Post;
  nextPost: Post;
};

export function PostNavigationView({
  previousPost,
  nextPost,
}: Props): JSX.Element {
  return (
    <Flex as="nav" flexDirection="column">
      {previousPost && (
        <Link href={"/blog/[slug]"} as={`/blog/${previousPost.slug}`}>
          <a>← {previousPost.frontmatter.title}</a>
        </Link>
      )}
      {nextPost && (
        <Link href={"/blog/[slug]"} as={`/blog/${nextPost.slug}`}>
          <a>{nextPost.frontmatter.title} →</a>
        </Link>
      )}
    </Flex>
  );
}
