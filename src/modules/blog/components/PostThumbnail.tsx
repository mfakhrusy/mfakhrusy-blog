import { Flex } from "@chakra-ui/react";

type Props = {
  slug: string;
  fileName: string;
};

export function PostThumbnail({ slug, fileName }: Props): JSX.Element {
  return (
    <Flex as="section">
      <img src={require(`../../../../content/posts/${slug}/images/${fileName}`)} />
    </Flex>
  );
}
