import * as React from "react"

// Chakra-ui components
import { Box, Text, Flex, Heading, Grid } from "@chakra-ui/react"

const Slide = props => (
  <Box>
    <Grid
      templateColumns={["1", "1", "1", "1", "repeat(2, 1fr)"]}
      gap={["0", "0", "0", "14", "20"]}
    >
      <Box align="center">
        <Box
          w={["100%", "100%", "100%", "100%", "400px"]}
          h={["300px", "300px", "300px", "300px", "400px"]}
          borderRadius="25px"
          backgroundImage={props.image}
          backgroundSize="cover"
        >
          <Box
            minH="100%"
            bgGradient="linear(to-r, white, rgb(0,0,0,0) 60%)"
            direction="column"
            align="center"
            justifyContent="center"
            borderRadius="24px"
          />
        </Box>
      </Box>
      <Box
        h="100%"
        p="60px 0"
        textAlign={["center", "center", "center", "center", "left"]}
      >
        <Heading as="h2" size="2xl" mb="6" fontWeight="thin">
          {props.title}
        </Heading>
        <Text fontSize="md" maxW="400px" color="gray.500">
          {props.content}
        </Text>
      </Box>
    </Grid>
  </Box>
)

export default Slide
