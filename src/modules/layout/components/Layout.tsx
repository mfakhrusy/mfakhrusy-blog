import { Spacer } from "@/src/components/Spacer";
import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({
  children,
}: PropsWithChildren<Record<string, unknown>>): JSX.Element {
  return (
    <Flex
      backgroundColor="gray.50"
      fontFamily="Roboto"
      alignItems="center"
      justifyContent="center"
      paddingTop={{ base: "20px", lg: "50px" }}
    >
      <Flex width={{ base: "100vw", lg: "1200px" }} flexDirection="column">
        <Header />
        <Flex>{children}</Flex>
        <Spacer height="20px" />
        <Footer />
      </Flex>
    </Flex>
  );
}
