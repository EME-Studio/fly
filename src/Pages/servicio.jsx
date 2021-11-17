import * as React from "react"

import Layout from "../Components/Layout/layout"
import Seo from "../Components/seo"

// chakra-ui components import
import { Box, Flex, Heading } from "@chakra-ui/react"

const Servicio = () => (
  <Layout>
    <Seo title="Servicio" />

    <Box
      w="full"
      minH="100vh"
      bgImage="url('/plane.jpeg')"
      bgSize="cover"
      bgPosition="center center"
      bgRepeat="no-repeat"
    >
      <Flex
        w="full"
        minH="100vh"
        bgColor="rgba(0, 0, 0, 0.6)"
        direction="column"
        align="center"
        justify="center"
      >
        <Heading as="h1" size="4xl" align="center" m="10" color="white">
          Servicio
        </Heading>
      </Flex>
    </Box>
  </Layout>
)

export default Servicio
