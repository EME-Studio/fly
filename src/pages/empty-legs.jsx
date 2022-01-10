import React from "react"
import useEmptyLegs from "../hooks/useEmptyLegs"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import EmptyLegCard from "../components/EmptyLegCard"

import { Box, Container } from "@chakra-ui/react"

import Avion from "../images/avion_fly.jpeg"

function EmptyLegs() {
  const response = useEmptyLegs()
  const emptyLegs = response.allStrapiEmptyLegs.nodes[0].data
  console.log(emptyLegs)

  return (
    <Layout displayHeader={true} headerRojo={false}>
      <Seo title="Empty Legs" />

      <Box
        w="full"
        h="50%"
        bgImage={Avion}
        bgSize="cover"
        bgPosition="center center"
        bgRepeat="no-repeat"
        bgAttachment={["scroll", "scroll", "scroll", "fixed", "fixed"]}
      />
      <Box bgColor="gray.100">
        <Container maxW="container.lg" py="50px !important">
          {emptyLegs.map(emptyLeg => (
            <EmptyLegCard
              key={emptyLeg.id}
              origen={emptyLeg.attributes.AeropuertoDeOrigen}
              destino={emptyLeg.attributes.AeropuertoDeDestino}
              fecha={emptyLeg.attributes.FechaDeSalida}
            />
          ))}
        </Container>
      </Box>
    </Layout>
  )
}

export default EmptyLegs
