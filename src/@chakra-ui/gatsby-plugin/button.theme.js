const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    mainOutline: {
      border: "2px solid",
      borderColor: "fly.main",
      color: "fly.main",
    },
    mainSolid: {
      bg: "fly.main",
      color: "white",
    },
    accentOutline: {
      border: "2px solid",
      borderColor: "fly.accent",
      color: "fly.accent",
    },
    accentSolid: {
      bg: "fly.accent",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "mainSolid",
  },
}

export default Button
