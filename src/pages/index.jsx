import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

import { FormProvider } from "../contexts/FormContext"
import Cotizador from "../components/Cotizador"

import {
  Heading,
  Flex,
  Box,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react"

import Avion from "../images/avion_fly.jpeg"

import { ReservationContextProvider } from "../contexts/ReservationContext"
import ReservationModal from "../components/ReservationModal"

const IndexPage = () => {
  return (
    <FormProvider>
      <ReservationContextProvider>
        <Layout displayHeader={true} headerRojo={false}>
          <Seo title="Home" />

          <ReservationModal title="Cotizar Vuelo" />

          <Box
            w="full"
            h="100%"
            bgImage={Avion}
            bgSize="cover"
            bgPosition="center center"
            bgRepeat="no-repeat"
            bgAttachment={["scroll", "scroll", "scroll", "fixed", "fixed"]}
          >
            <Flex
              h="100%"
              w="100%"
              bg="linear-gradient(180deg, rgba(6,63,106,0.9) 0%, rgba(6,63,106,0.4) 100%)"
              direction="column"
              align="center"
              justifyContent="center"
            >
              <Container
                maxW="container.xl"
                mt={["80px", "10vh", "10vh", "10vh", "10vh"]}
                centerContent
              >
                <Heading
                  as="h1"
                  size="3xl"
                  display={["none", "none", "flex", "flex", "flex"]}
                  align="center"
                  m="10"
                  color="white"
                >
                  Tu libertad, nuestro servicio
                </Heading>
                <Tabs variant="unstyled" color="white">
                  <TabList>
                    <Tab
                      _selected={{
                        borderBottom: "2px",
                        borderColor: "fly.accent",
                      }}
                    >
                      SOLO IDA
                    </Tab>
                    <Tab
                      _selected={{
                        borderBottom: "2px",
                        borderColor: "fly.accent",
                      }}
                    >
                      IDA Y VUELTA
                    </Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel align="right" px="0">
                      <Cotizador soloIda={true} />
                    </TabPanel>
                    <TabPanel align="right" px="0">
                      <Cotizador soloIda={false} />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Container>
            </Flex>
          </Box>
        </Layout>
      </ReservationContextProvider>
    </FormProvider>
  )
}

export default IndexPage
