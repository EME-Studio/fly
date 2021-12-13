import * as React from "react"

// Internal components
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

// Chakra-ui components
import { Box, Flex, Heading, Container, Grid, Text } from "@chakra-ui/react"

// Images and icons
import ExperienciaImg from "../images/experiencia.jpeg"

const ExperienciaFly = () => (
  <Layout headerRojo={true}>
    <Seo title="Experiencia Fly" />

    <Flex
      w="100%"
      h="100%"
      bgImage={ExperienciaImg}
      bgSize="cover"
      bgPosition="left"
      bgRepeat="no-repeat"
      alignItems="center"
    >
      <Flex
        h="100%"
        w="100%"
        bgColor="rgba(6, 63, 106, 0.4)"
        direction="column"
        align="center"
        justifyContent="center"
      >
        <Container maxW="container.xl">
          <Grid
            templateColumns={[
              "1",
              "1",
              "1",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap={100}
          >
            <Flex
              alignItems="flex-start"
              justifyContent="flex-start"
              direction="column"
            >
              <Heading color="white" textAlign="left" mb="8">
                <Text textColor="fly.main" display="inline" fontWeight="bold">
                  EXPERIENCIA
                </Text>{" "}
                FLY
              </Heading>
              <Text color="white" maxW="sm">
                Tomamos el conocimiento reunido en más de 30 años de trayectoria
                y el espíritu innovador que nos caracteriza, para crear
                servicios con los más altos estándares de seguridad, confort y
                atención, que te permitirán disfrutar de una experiencia
                excepcional en cada trayecto. Únete a la familia FLY y
                contágiate de nuestra pasión por volar con cada milla recorrida.
              </Text>
            </Flex>
            <Box />
          </Grid>
        </Container>
      </Flex>
    </Flex>
  </Layout>
)

export default ExperienciaFly
