import * as React from "react"

// Internal components
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

// Chakra-ui components
import { Box, Flex, Heading, Container, Grid, Text } from "@chakra-ui/react"

// Images and icons
import ExperienciaImg from "../images/experiencia.jpeg"

const ExperienciaFly = () => (
  <Layout displayHeader={true} headerRojo={true}>
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
        bg="linear-gradient(90deg, rgba(6,63,106,0.7) 0%, rgba(6,63,106,0) 100%)"
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
                  ¿
                </Text>
                QUIENES SOMOS
                <Text textColor="fly.main" display="inline" fontWeight="bold">
                  ?
                </Text>
              </Heading>
              <Text color="white" textAlign="justify" fontSize="sm">
                FLY Uruguay cuenta con alianzas, acuerdos y contratos con
                diferentes proveedores aéreos de la región que nos eligieron
                para ofrecer sus servicios de taxi aéreo, traslados sanitarios,
                servicios de búsqueda y patrullaje vuelos panorámicos,
                fotografía, publicidad aérea, declaración y habilitación de
                pistas y aeródromos, helipuertos, certificación de empresas,
                contratos de arrendamiento, compra y venta de aeronaves, vuelos
                ferry, importación, despacho, matriculación, operación,
                mantenimiento, hangaraje, administración y gestión integral de
                aeronaves.
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
