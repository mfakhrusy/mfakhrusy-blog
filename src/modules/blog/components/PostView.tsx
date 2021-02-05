import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Frontmatter, Post } from "@/utils/posts";
import { Spacer } from "@/src/components/Spacer";
import { MarkdownRenderer } from "@/src/modules/markdownRenderer";
import { PostNavigationView } from "./PostNavigationView";
import { LargePostThumbnail } from "./LargePostThumbnail";

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
    <Flex flexDirection="column" w="100%">
      <Flex as="article" flexDirection="column" minHeight="calc(100vh - 150px)">
        <Flex
          as="header"
          flexDirection="column"
          maxW="1080px"
          pl={{ base: "20px", md: "200px" }}
          pr={{ base: "20px", md: "200px" }}
        >
          <Heading size="lg" marginBottom="10px">
            {frontmatter.title}
          </Heading>
          <Text as="small">{frontmatter.date}</Text>
        </Flex>
        <Spacer height="20px" />
        <VStack w="100%">
          <LargePostThumbnail
            fileName={frontmatter.thumbnail}
            slug={post.slug}
          />
        </VStack>
        <Spacer height="30px" />
        <Flex
          flexDirection="column"
          maxW="1080px"
          pl={{ base: "20px", md: "200px" }}
          pr={{ base: "20px", md: "200px" }}
        >
          <MarkdownRenderer content={post.content} />
        </Flex>
      </Flex>
      <Spacer height="30px" />
      <PostNavigationView previousPost={previousPost} nextPost={nextPost} />
    </Flex>
  );
}
