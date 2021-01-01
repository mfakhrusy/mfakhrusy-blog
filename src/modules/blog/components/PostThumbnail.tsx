import { Flex, Image } from "@chakra-ui/react";

type Props = {
  slug: string;
  fileName: string;
};

export function PostThumbnail({ slug, fileName }: Props): JSX.Element {
  return (
    <Flex as="section">
      <Image
        src={require(`../../../../content/posts/${slug}/images/${fileName}`)}
        maxWidth="200px"
      />
    </Flex>
  );
}
