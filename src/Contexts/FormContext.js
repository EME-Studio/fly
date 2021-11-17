import React, { useState } from "react"

export const FormContext = React.createContext()

export function FormProvider({ children }) {
  const [flightInfo, setFlightInfo] = useState(2)

  const editFlightInfo = input => {
    setFlightInfo(input)
  }

  return (
    <FormContext.Provider value={{ flightInfo }}>
      {children}
    </FormContext.Provider>
  )
}
