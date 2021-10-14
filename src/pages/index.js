import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Heading, Flex, Box } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Flex
      w="full"
      h="100vh"
      direction="column"
      align="center"
      justify="center"
      bgImage="url('/plane.jpeg')"
      bgSize="cover"
      bgPosition="center center"
      bgRepeat="no-repeat"
    >
      <Heading as="h1" size="4xl" align="center" m="10">
        Tu libertad, nuestro servicio
      </Heading>

      <Box align="center" w="800px" h="200px">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>SOLO IDA</Tab>
            <Tab>IDA Y VUELTA</Tab>
            <Tab>MULTILEG</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <FormControl id="email">
                <Flex>
                  <Flex bg="tomato" borderRadius="xl" mr="2">
                    <FormLabel>A</FormLabel>
                    <Input type="email" bg="gray" />
                  </Flex>
                  <Flex bg="tomato" borderRadius="xl" mr="2">
                    <FormLabel>B</FormLabel>
                    <Input type="email" bg="gray" />
                  </Flex>
                  <Button variant="solid" colorScheme="teal">
                    Enviar
                  </Button>
                </Flex>
              </FormControl>
            </TabPanel>

            <TabPanel>
              <FormControl id="email">
                <Flex>
                  <Flex bg="tomato" borderRadius="xl" mr="2">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" bg="gray" />
                  </Flex>
                  <Flex bg="tomato" borderRadius="xl" mr="2">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" bg="gray" />
                  </Flex>
                  <Button variant="solid" colorScheme="teal">
                    Enviar
                  </Button>
                </Flex>
              </FormControl>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  </Layout>
)

export default IndexPage
