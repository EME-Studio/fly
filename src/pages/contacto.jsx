import * as React from "react"

// Internal components
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import ContactForm from "../components/form/ContactForm"

// Chakra-ui components
import {
  Box,
  Flex,
  Heading,
  Container,
  Grid,
  Text,
  Divider,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react"

// Images and Icons
import { PhoneIcon } from "@chakra-ui/icons"

const Contacto = () => (
  <Layout headerRojo={true}>
    <Seo title="Contacto" />

    <Flex
      minH="100%"
      justifyContent="center"
      alignItems="center"
      bgColor="fly.main"
    >
      <Container maxW="container.xl" centerContent>
        <Grid
          color="white"
          templateColumns={["1", "1", "1", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
          gap={100}
        >
          <Box maxW="350px">
            <Heading as="h2" size="lg" mb="10">
              CONTACTO
            </Heading>
            <Text fontSize="sm" mb="5">
              Aeropuerto Internacional Ángel Adami, 6P6Q+MGV, 12500 Montevideo,
              Departamento de
            </Text>
            <Divider mb="5" />
            <Flex mb="3">
              <Flex mr="8">
                <PhoneIcon mr="2" />
                <Text fontSize="sm">+598 99 590 210</Text>
              </Flex>
              <Flex>
                <PhoneIcon mr="2" />
                <Text fontSize="sm">fly@fly.com.uy</Text>
              </Flex>
            </Flex>
            <Text mb="3" fontSize="sm">
              Síguenos en nuestras redes y descubre mas de nuestros servicios!
            </Text>
            <Flex>
              <PhoneIcon mr="4" />
              <PhoneIcon mr="4" />
              <PhoneIcon mr="4" />
            </Flex>
          </Box>
          <Box>
            <ContactForm />
          </Box>
        </Grid>
      </Container>
    </Flex>
  </Layout>
)

export default Contacto
