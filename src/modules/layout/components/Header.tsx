import { useRouter } from "next/router";
import { Flex, Image, Text } from "@chakra-ui/react";
import { Spacer } from "@/src/components/Spacer";

export function Header(): JSX.Element {
  const router = useRouter();
  return (
    <Flex
      width="250px"
      alignItems="center"
      cursor="pointer"
      onClick={() => router.push("/blog")}
      marginBottom="50px"
      paddingLeft={{ base: "20px", md: "50px" }}
    >
      <Image src="/assets/butterfly.svg" height="30px" width="30px" />
      <Spacer width="20px" />
      <Text>mfakhrusy blog</Text>
    </Flex>
  );
}
