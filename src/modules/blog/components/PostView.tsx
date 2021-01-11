import { Flex, Heading, Text } from "@chakra-ui/react";
import { Frontmatter, Post } from "@/utils/posts";
import { Spacer } from "@/src/components/Spacer";
import { MarkdownRenderer } from "@/src/modules/markdownRenderer";
import { PostThumbnail } from "./PostThumbnail";
import { PostNavigationView } from "./PostNavigationView";

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
      <Spacer height="30px" />
      <PostNavigationView previousPost={previousPost} nextPost={nextPost} />
    </Flex>
  );
}
