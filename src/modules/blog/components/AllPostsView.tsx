import { Post } from "@/utils/posts";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { PostThumbnail } from "./PostThumbnail";

type Props = {
  posts: Array<Post>;
};

export function AllPostsView({ posts }: Props) {
  return (
    <Flex flexDirection="column">
      {posts.map(
        ({ frontmatter: { title, description, date, thumbnail }, slug }) => (
          <Box as="article" key={slug}>
            <Box as="header">
              <Text as="h3">
                <Link href={"/blog/[slug]"} as={`/blog/${slug}`}>
                  {title}
                </Link>
              </Text>
              <Box as="span">{date}</Box>
            </Box>
            <Box as="section">
              <Text>{description}</Text>
            </Box>
            {thumbnail && (
              <PostThumbnail slug={slug} fileName={thumbnail} />
            )}
          </Box>
        )
      )}
    </Flex>
  );
}
