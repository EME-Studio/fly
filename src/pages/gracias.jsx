import React from "react"

// Internal components
import Layout from "../components/layout/layout"

// Chakra UI components
import { Flex, Container, Text, Button, Image } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

// Images and icons
import Gracias from "../images/gracias.jpg"
import Logo from "../images/icons/logofly.png"
import { Link } from "gatsby"

function gracias() {
  return (
    <Layout displayHeader={false}>
      <Flex
        w="100%"
        h="100%"
        bgImage={Gracias}
        bgSize="cover"
        bgPosition="left"
        bgRepeat="no-repeat"
        alignItems="center"
      >
        <Flex
          h="100%"
          w="100%"
          bgColor="rgba(6, 63, 106, 0.8)"
          direction="column"
          align="center"
          justifyContent="center"
        >
          <Container
            display="flex"
            maxW="container.xl"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
          >
            <Image src={Logo} w="200px" mb="12" />
            <Text fontSize="2xl" color="white" mb="8" textAlign="center">
              Nos pondremos en contacto a la brevedad. <br /> Muchas gracias por
              confiar en Fly.
            </Text>
            <Button as={GatsbyLink} to="/" variant="accentSolid">
              Volver al sitio
            </Button>
          </Container>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default gracias
