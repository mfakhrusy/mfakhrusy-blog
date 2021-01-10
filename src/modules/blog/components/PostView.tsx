import { Frontmatter, Post } from "@/utils/posts";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Spacer } from "@/src/components/Spacer";
import { PostThumbnail } from "./PostThumbnail";
import { MarkdownRenderer } from "@/src/modules/markdownRenderer";
import Link from "next/link";

type Props = {
  frontmatter: Frontmatter;
  post: Post;
  previousPost: Post;
  nextPost: Post;
};

export function PostView({
  frontmatter,
  post,
  previousPost,
  nextPost,
}: Props): JSX.Element {
  return (
    <Flex flexDirection="column">
      <Flex as="article" flexDirection="column" minHeight="calc(100vh - 150px)">
        <Flex as="header" flexDirection="column">
          <Heading size="lg" marginBottom="10px">
            {frontmatter.title}
          </Heading>
          <Text as="small">{frontmatter.date}</Text>
        </Flex>
        <Spacer height="20px" />
        <PostThumbnail
          fileName={frontmatter.thumbnail}
          slug={post.slug}
          size="large"
        />
        <Spacer height="30px" />
        <MarkdownRenderer content={post.content} />
      </Flex>

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
    </Flex>
  );
}
