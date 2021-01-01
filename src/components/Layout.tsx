import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Header } from "./Header";

export function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Flex
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
