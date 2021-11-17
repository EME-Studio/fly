import * as React from "react"
import PropTypes from "prop-types"
import {
  Flex,
  Spacer,
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

const Header = ({ siteTitle }) => (
  <Container maxW="container.xl" centerContent>
    <Flex direction="row" as="header" h="10vh" w="100%" p="80px" pos="fixed">
      <Center>
        <Link as={GatsbyLink} to="/">
          <Image src="/logo-fly.png" alt="Fly Logo"></Image>
        </Link>
      </Center>

      <Spacer />

      {/* Big screens nav bar */}
      <HStack
        spacing={3}
        divider={<StackDivider />}
        as="nav"
        display={["none", "none", "flex", "flex"]}
      >
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
      <Box display={["flex", "flex", "none", "none"]}>
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
      </Box>
    </Flex>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
