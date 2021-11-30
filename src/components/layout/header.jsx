import * as React from "react"
import PropTypes from "prop-types"
import {
  Flex,
  Stack,
  Link,
  Center,
  HStack,
  StackDivider,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  Image,
  Container,
} from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

import { HamburgerIcon } from "@chakra-ui/icons"
import Logo from "../../images/icons/logofly.png"

const Header = ({ siteTitle }) => (
  <Box
    as="header"
    maxW="7xl"
    mx="auto"
    left="0"
    right="0"
    justify-content="center"
    align-items="center"
    px="8"
    pos={["absolute", "absolute", "absolute", "fixed", "fixed"]}
  >
    <Stack direction="row" spacing="4" align="center" justify="space-between">
      <Center>
        <Link as={GatsbyLink} to="/">
          <Image
            src={Logo}
            alt="Fly Logo"
            boxSize={["100px", "150px"]}
            objectFit="contain"
          ></Image>
        </Link>
      </Center>

      {/* Big screens nav bar */}
      <HStack spacing={3} as="nav" display={["none", "none", "flex", "flex"]}>
        <Link as={GatsbyLink} to="/" color="white" fontSize="sm">
          COTIZAR VUELO
        </Link>
        <Link as={GatsbyLink} to="/experiencia-fly" color="white" fontSize="sm">
          EXPERIENCIA FLY
        </Link>
        <Link as={GatsbyLink} to="/servicio" color="white" fontSize="sm">
          SERVICIO
        </Link>
        <Link as={GatsbyLink} to="/contacto" color="white" fontSize="sm">
          CONTACTO
        </Link>
      </HStack>

      {/* Small screens nav bar */}
      {/* <Box display={["flex", "flex", "none", "none"]}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem command="⌘T">New Tab</MenuItem>
            <MenuItem command="⌘N">New Window</MenuItem>
            <MenuItem command="⌘⇧N">Open Closed Tab</MenuItem>
            <MenuItem command="⌘O">Open File...</MenuItem>
          </MenuList>
        </Menu>
      </Box> */}
    </Stack>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
