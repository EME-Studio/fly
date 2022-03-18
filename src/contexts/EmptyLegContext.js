import React, { useState, useContext } from "react"
import { useDisclosure } from "@chakra-ui/react"

const EmptyLegContext = React.createContext()
const UpdateEmptyLegContext = React.createContext()
const ModalContext = React.createContext()

export function useEmptyLegContext() {
  return useContext(EmptyLegContext)
}

export function useUpdateEmptyLegContext() {
  return useContext(UpdateEmptyLegContext)
}

export function useModalContext() {
  return useContext(ModalContext)
}

export function EmptyLegContextProvider({ children }) {
  const [emptyLegInfo, setEmptyLegInfo] = useState({
    Origen: "",
    Destino: "",
    Fecha: "",
    Tipo: "",
    Seats: "",
    Phone: "",
  })

  const { isOpen, onOpen, onClose } = useDisclosure()

  const editEmptyLegInfo = input => {
    setEmptyLegInfo(input)
  }

  return (
    <EmptyLegContext.Provider value={emptyLegInfo}>
      <UpdateEmptyLegContext.Provider value={editEmptyLegInfo}>
        <ModalContext.Provider value={{ isOpen, onOpen, onClose }}>
          {children}
        </ModalContext.Provider>
      </UpdateEmptyLegContext.Provider>
    </EmptyLegContext.Provider>
  )
}
