import { Flex, Image } from "@chakra-ui/react";

type Props = {
  slug: string;
  fileName: string;
};

export function PostThumbnail({ slug, fileName }: Props): JSX.Element {
  return (
    <Flex
      className="post-thumbnail-wrapper"
      as="section"
      width="500px"
      height="200px"
      boxShadow="rgba(0, 0, 0, 0.3) 0px 30px 60px -10px, rgba(0, 0, 0, 0.33) 0px 18px 36px -18px"
      transition="0.3s cubic-bezier(0.5, 1, 0.89, 1)"
    >
      <Image
        objectFit="cover"
        src={require(`../../../../content/posts/${slug}/images/${fileName}`)}
        minWidth="100%"
      />
    </Flex>
  );
}
