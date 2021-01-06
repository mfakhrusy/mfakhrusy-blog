import { extendTheme, theme } from "@chakra-ui/react";

export const chakraTheme = extendTheme({
  ...theme,
  colors: {
    brown: {
      100: "#F9F6F1",
      200: "#F3EDE2",
      300: "#E7DBC5",
    },
    gray: {
      50: "#FAFAFA",
    },
  },
});
