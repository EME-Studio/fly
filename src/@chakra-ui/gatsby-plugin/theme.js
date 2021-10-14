import { extendTheme } from "@chakra-ui/react"

const theme = {
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: props => ({
      // styles for the `body`
      body: {
        bg: "light",
        color: "dark",
      },
      // styles for the `a`
      a: {
        color: props.colorMode === "light" ? "primary.500" : "primary.100",
        _hover: {
          textDecoration: "underline",
        },
      },
    }),
  },
  colors: {
    light: "#FFFFFF",
    dark: "#17181C",
    primary: {
      100: "#7CEBB3",
      200: "#76DEAA",
      300: "#68C496",
      400: "#549E79",
      500: "#325E48",
    },
    secondary: {
      100: "#EBA171",
      200: "#DE996A",
      300: "#C4875E",
      400: "#9E6D4C",
      500: "#5E412D",
    },
  },
}

export default extendTheme(theme)
