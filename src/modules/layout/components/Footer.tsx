import { Flex, Text } from "@chakra-ui/react";

export function Footer(): JSX.Element {
  return (
    <Flex as="footer" borderTop="1px solid #CCCCCC" paddingTop="15px" paddingBottom="35px">
      <Text>{`© ${(new Date()).getFullYear()}`} Muhamad Fakhrusy</Text>
    </Flex>
  )
}
