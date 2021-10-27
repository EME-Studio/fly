import * as React from "react"
import PropTypes from "prop-types"
import {
  Flex,
  Spacer,
  Link,
  Center,
  HStack,
  StackDivider,
} from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

const Header = ({ siteTitle }) => (
  <Flex direction="row" as="header" h="10vh" w="100%" pos="fixed">
    <Center>
      <Link as={GatsbyLink} to="/">
        {siteTitle}
      </Link>
    </Center>

    <Spacer />

    <HStack spacing={3} divider={<StackDivider />} as="nav">
      <Link as={GatsbyLink} to="/">
        Home
      </Link>
      <Link as={GatsbyLink} to="/page-2">
        Page 2
      </Link>
    </HStack>
  </Flex>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
