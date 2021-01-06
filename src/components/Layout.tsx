import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Header } from "./Header";

// eslint-disable-next-line @typescript-eslint/ban-types
export function Layout({ children }: PropsWithChildren<{}>): JSX.Element {
  return (
    <Flex
      backgroundColor="gray.50"
      fontFamily="Roboto"
      alignItems="center"
      justifyContent="center"
      paddingTop="50px"
    >
      <Flex width="1200px" flexDirection="column">
        <Header />
        <Flex>{children}</Flex>
      </Flex>
    </Flex>
  );
}
