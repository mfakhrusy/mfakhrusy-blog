import { Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = {
  level: number;
};

export function MarkdownHeading(props: PropsWithChildren<Props>): JSX.Element {
  switch (props.level) {
    case 1:
      return (
        <Heading as="h1" size="2xl" mt="20px" mb="10px">
          {props.children}
        </Heading>
      );
    case 2:
      return (
        <Heading as="h2" size="xl" mt="20px" mb="10px">
          {props.children}
        </Heading>
      );
    case 3:
      return (
        <Heading as="h3" size="lg" mt="20px" mb="10px">
          {props.children}
        </Heading>
      );
    case 4:
      return (
        <Heading as="h4" size="md" mt="10px" mb="10px">
          {props.children}
        </Heading>
      );
    case 5:
      return (
        <Heading as="h5" size="sm" mt="10px" mb="10px">
          {props.children}
        </Heading>
      );
    case 6:
      return (
        <Heading as="h6" size="xs" mt="10px" mb="10px">
          {props.children}
        </Heading>
      );
    default: {
      return null;
    }
  }
}
