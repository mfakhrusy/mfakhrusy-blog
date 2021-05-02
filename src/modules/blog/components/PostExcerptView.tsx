import { Spacer } from "@/src/components/Spacer";
import { Frontmatter } from "@/utils/posts";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { PostThumbnail } from "./PostThumbnail";
import styled from "@emotion/styled";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Container = styled(Flex)`
  @media only screen and (min-width: 62em) {
    &:hover {
      .post-thumbnail-wrapper {
        transform: translateX(-2px);
        transition: 0.3s cubic-bezier(0.5, 1, 0.89, 1);
        box-shadow: rgba(0, 0, 0, 0.42) 2px 30px 60px -10px,
          rgba(0, 0, 0, 0.33) 0px 18px 36px -18px;
      }

      .post-title {
        color: purple;
        transition: 0.3s cubic-bezier(0.5, 1, 0.89, 1);
      }
    }
  }
`;

type Props = {
  frontmatter: Frontmatter;
  slug: string;
};

export default function PostExcerptView({
  frontmatter,
  slug,
}: Props): JSX.Element {
  const { title, description, thumbnail, date, excerpt } = frontmatter;

  const router = useRouter();

  return (
    <Container
      key={slug}
      marginBottom="60px"
      cursor="pointer"
      onClick={() => router.push(slug)}
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      boxShadow={{
        base:
          "rgba(0, 0, 0, 0.3) 0px 10px 60px -10px, rgba(0, 0, 0, 0.33) 0px 18px 36px -18px",
        lg: "none",
      }}
      padding={{ base: 4, lg: "0" }}
      marginX={{ base: 4, lg: "0" }}
      borderRadius={{ base: "10px", lg: "0" }}
    >
      <PostThumbnail slug={slug} fileName={thumbnail} />
      <Spacer
        width={{ base: "0", lg: "50px" }}
        height={{ base: "25px", lg: "0" }}
      />
      <Flex flexDirection="column" maxWidth="600px">
        <Box as="header">
          <Heading
            as="h2"
            size="md"
            className="post-title"
            transition="0.3s cubic-bezier(0.5, 1, 0.89, 1)"
          >
            {title}
          </Heading>
          <Box as="small">{date}</Box>
        </Box>
        <Box as="section">
          <Text>{description}</Text>
        </Box>
        <Spacer height="10px" />
        <Box as="section">
          <Text>{excerpt}</Text>
        </Box>
      </Flex>
    </Container>
  );
}
