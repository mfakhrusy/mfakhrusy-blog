import { useRouter } from "next/router";
import { Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { Spacer } from "@/src/components/Spacer";
import { CategoryMenu } from "@/src/modules/layout/components/CategoryMenu";

export function Header(): JSX.Element {
  const router = useRouter();
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <Flex
      width="250px"
      alignItems="center"
      marginBottom="50px"
      paddingLeft={{ base: "20px", md: "50px" }}
      w="100%"
    >
      <Flex onClick={() => router.push("/")} cursor="pointer">
        <Image
          cursor="pointer"
          src="/assets/butterfly.svg"
          height="30px"
          width="30px"
        />
        <Spacer width="20px" />
        {isLargerThan480 && <Text>mfakhrusy blog</Text>}
      </Flex>
      {router.pathname === "/" && <CategoryMenu />}
    </Flex>
  );
}
