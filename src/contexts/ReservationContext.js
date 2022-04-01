import React, { useState, useContext } from "react"
import { useDisclosure } from "@chakra-ui/react"

const ReservationContext = React.createContext()
const UpdateReservationContext = React.createContext()
const ModalContext = React.createContext()

export function useReservationContext() {
  return useContext(ReservationContext)
}

export function useUpdateReservationContext() {
  return useContext(UpdateReservationContext)
}

export function useModalContext() {
  return useContext(ModalContext)
}

export function ReservationContextProvider({ children }) {
  const [reservationInfo, setReservationInfo] = useState({
    origen: "",
    destino: "",
    fechaIda: "",
    fechaVuelta: "",
    tipo: "",
    seats: "",
    equipaje: "",
    phone: "",
  })

  const { isOpen, onOpen, onClose } = useDisclosure()

  const editReservationInfo = input => {
    setReservationInfo(input)
  }

  return (
    <ReservationContext.Provider value={reservationInfo}>
      <UpdateReservationContext.Provider value={editReservationInfo}>
        <ModalContext.Provider value={{ isOpen, onOpen, onClose }}>
          {children}
        </ModalContext.Provider>
      </UpdateReservationContext.Provider>
    </ReservationContext.Provider>
  )
}
