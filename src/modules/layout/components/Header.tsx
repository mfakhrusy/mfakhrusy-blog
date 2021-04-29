import { useRouter } from "next/router";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { Spacer } from "@/src/components/Spacer";
import { categories } from "@/utils/postsConstants";

export function Header(): JSX.Element {
  const router = useRouter();
  console.log(categories);

  return (
    <Flex
      width="250px"
      alignItems="center"
      cursor="pointer"
      onClick={() => router.push("/")}
      marginBottom="50px"
      paddingLeft={{ base: "20px", md: "50px" }}
      w="100%"
    >
      <Image src="/assets/butterfly.svg" height="30px" width="30px" />
      <Spacer width="20px" />
      <Text>mfakhrusy blog</Text>
      <Button variant="ghost" ml="auto" mr="20px">
        all
      </Button>
    </Flex>
  );
}
