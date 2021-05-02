import { Flex, Text } from "@chakra-ui/react";

export function Footer(): JSX.Element {
  return (
    <Flex
      as="footer"
      borderTop="1px solid #CCCCCC"
      paddingTop={4}
      paddingBottom="35px"
      paddingX={4}
    >
      <Text>{`© ${new Date().getFullYear()}`} Muhamad Fakhrusy</Text>
    </Flex>
  );
}
