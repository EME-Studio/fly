import * as React from "react"

import {
  useDisclosure,
  Divider,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

function Cotizador() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} variant="accentSolid">
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="none">
          <ModalHeader>Cotizar Vuelo</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            Dejanos tu e-mail y nos pondremos en contacto a la brevedad.
            <br />
            <br />
            ¡Gracias por elegirnos!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Enviar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Cotizador
