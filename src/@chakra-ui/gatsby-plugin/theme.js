import { extendTheme } from "@chakra-ui/react"
import Button from "./button.theme"

const theme = {
  initialColorMode: "light",
  useSystemColorMode: false,
  components: {
    Button,
  },
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
  fonts: {
    body: "Montserrat, sans-serif;",
    heading: "Montserrat, sans-serif;",
    mono: "Menlo, monospace",
  },
  colors: {
    light: "#FFFFFF",
    dark: "#17181C",
    primary: {
      main: "#063F6A",
      accent: "#FF4C04",
    },
  },
}

export default extendTheme(theme)
