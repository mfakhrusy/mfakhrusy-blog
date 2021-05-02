import { Flex, Image } from "@chakra-ui/react";

type Props = {
  slug: string;
  fileName: string;
};

export function LargePostThumbnail({ slug, fileName }: Props): JSX.Element {
  return (
    <Flex
      className="post-thumbnail-wrapper"
      width={{ base: "70%", md: "800px" }}
      height="auto"
      boxShadow={{
        lg:
          "rgba(0, 0, 0, 0.3) 0px 10px 60px 5px, rgba(0, 0, 0, 0.33) 0px 18px 36px -18px",
      }}
      transition={{ lg: "0.3s cubic-bezier(0.5, 1, 0.89, 1)" }}
    >
      <Image
        objectFit="cover"
        src={require(`../../../../content/posts/${slug}/images/${fileName}`)}
        minWidth="100%"
      />
    </Flex>
  );
}
