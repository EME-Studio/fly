import React, { useState, createContext } from "react"

import { useDisclosure } from "@chakra-ui/react"

export const EmptyLegsContext = createContext()

export const EmptyLegsProvider = props => {
  const [emptyLegReserva, setEmptyLegReserva] = useState({
    origen: "",
    destino: "",
    fecha: "",
    tipoDeReserva: "",
    celular: "",
  })

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <EmptyLegsContext.Provider
      value={{
        reservaState: [emptyLegReserva, setEmptyLegReserva],
        modalState: { isOpen, onOpen, onClose },
      }}
    >
      {props.children}
    </EmptyLegsContext.Provider>
  )
}
