import React, { useState } from "react"

// Chakra-ui components
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react"

function ContactForm() {
  // Form data handling
  const [contactData, setContactData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })

  const handleChange = e => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    })
  }

  // Connection with Netlify endpoint
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSumbit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contacto", ...contactData }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <Box>
      <form
        onSubmit={handleSumbit}
        name="contacto"
        id="contacto"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contacto" />
        <FormControl id="nombre" isRequired mb="4">
          <FormLabel fontSize="xs">Nombre</FormLabel>
          <Input
            name="nombre"
            value={contactData.nombre}
            onChange={handleChange}
            color="white"
            fontSize="md"
          />
        </FormControl>
        <FormControl id="email" isRequired mb="4">
          <FormLabel fontSize="xs">Email</FormLabel>
          <Input
            name="email"
            value={contactData.email}
            onChange={handleChange}
            type="email"
            color="white !important"
            fontSize="md"
          />
        </FormControl>
        <FormControl id="mensaje" isRequired mb="5">
          <FormLabel fontSize="xs">Mensaje</FormLabel>
          <Textarea
            name="mensaje"
            value={contactData.mensaje}
            onChange={handleChange}
            color="white !important"
            fontSize="md"
          />
        </FormControl>
        <Button type="submit" variant="accentSolid">
          Enviar
        </Button>
      </form>
    </Box>
  )
}

export default ContactForm
