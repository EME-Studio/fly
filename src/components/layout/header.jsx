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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Divider,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

import { HamburgerIcon } from "@chakra-ui/icons"

// Import images
import LogoBlanco from "../../images/icons/logofly.png"
import LogoRojo from "../../images/icons/logofly-rojo.png"

const Header = ({ siteTitle, conColor }) => {
  const {
    isOpen: isDesktopModalOpen,
    onOpen: onDesktopModalOpen,
    onClose: onDesktopModalClose,
  } = useDisclosure()
  const {
    isOpen: isMobileModalOpen,
    onOpen: onMobileModalOpen,
    onClose: onMobileModalClose,
  } = useDisclosure()

  return (
    <Box
      as="header"
      w="100%"
      borderBottom={conColor ? "1px" : null}
      borderColor="fly.main"
      pos={
        conColor
          ? "static"
          : ["absolute", "absolute", "absolute", "fixed", "fixed"]
      }
      // left="0"
      // right="0"
      bgColor={conColor ? "white" : null}
    >
      <Container maxW="container.xl" py="0 !important">
        <Stack
          direction="row"
          spacing="4"
          align="center"
          justify="space-between"
        >
          <Link as={GatsbyLink} to="/">
            <Center>
              <Image
                src={conColor ? LogoRojo : LogoBlanco}
                alt="Fly Logo"
                boxSize={["80px", "80px", "90px", "120px", "120px"]}
                objectFit="contain"
                mb="0"
              ></Image>
            </Center>
          </Link>

          {/* Big screens nav bar */}
          <HStack
            spacing={3}
            as="nav"
            display={["none", "none", "none", "flex", "flex"]}
          >
            <Link
              as={GatsbyLink}
              to="/"
              color={conColor ? "fly.main" : "white"}
              fontSize="sm"
            >
              COTIZAR VUELO
            </Link>
            <IconButton
              icon={<HamburgerIcon color={conColor ? "fly.main" : "white"} />}
              onClick={onDesktopModalOpen}
              variant="ghost"
            ></IconButton>
          </HStack>

          {/* Secondary hamburger nav bar */}
          <Modal
            onClose={onDesktopModalClose}
            size="full"
            isOpen={isDesktopModalOpen}
          >
            <ModalOverlay />
            <ModalContent bgColor="rgb(6, 63, 106, 0.9)">
              <ModalCloseButton color="white" />
              <ModalBody
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                {/* <Link
                  as={GatsbyLink}
                  to="/servicio"
                  color="white"
                  fontSize="4xl"
                  mb="10px"
                >
                  SERVICIOS
                </Link> */}
                <Link
                  as={GatsbyLink}
                  to="/contacto"
                  color="white"
                  fontSize="4xl"
                  mb="10px"
                >
                  CONTACTO
                </Link>
                <Link
                  as={GatsbyLink}
                  to="/quienes-somos"
                  color="white"
                  fontSize="4xl"
                >
                  QUIENES SOMOS
                </Link>
              </ModalBody>
            </ModalContent>
          </Modal>

          {/* Small screens nav bar */}
          <IconButton
            icon={<HamburgerIcon color={conColor ? "fly.main" : "white"} />}
            onClick={onMobileModalOpen}
            variant="ghost"
            display={["flex", "flex", "flex", "none", "none"]}
          ></IconButton>
          <Modal
            onClose={onMobileModalClose}
            size="full"
            isOpen={isMobileModalOpen}
          >
            <ModalOverlay />
            <ModalContent bgColor="rgb(6, 63, 106, 0.9)">
              <ModalCloseButton color="white" />
              <ModalBody
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Link
                  as={GatsbyLink}
                  to="/"
                  color="white"
                  fontSize="xl"
                  mb="10px"
                >
                  COTIZAR VUELO
                </Link>
                {/* <Link
                  as={GatsbyLink}
                  to="/servicio"
                  color="white"
                  fontSize="xl"
                  mb="10px"
                >
                  SERVICIOS
                </Link> */}
                <Link
                  as={GatsbyLink}
                  to="/contacto"
                  color="white"
                  fontSize="xl"
                  mb="10px"
                >
                  CONTACTO
                </Link>
                <Link
                  as={GatsbyLink}
                  to="/quienes-somos"
                  color="white"
                  fontSize="xl"
                >
                  QUIENES SOMOS
                </Link>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Stack>
      </Container>
    </Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
