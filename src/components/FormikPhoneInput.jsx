import React, { useEffect } from "react"

import { Field, ErrorMessage, useField } from "formik"

import { Box } from "@chakra-ui/react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

const FormikPhoneInput = ({ label, ...props }) => {
  const [field] = useField(props)

  useEffect(() => {
    props.setValue("phone", "+598 ")
  }, [props])

  return (
    <Field name={props.name}>
      {() => (
        <div>
          <label htmlFor={props.id || props.name}>{label}</label>
          <PhoneInput
            inputProps={{
              autoFocus: true,
              ...field,
              ...props,
            }}
            onChange={phone => props.setValue("phone", `+${phone} `)}
            country={"uy"}
            type="tel"
            preferredCountries={[
              "uy",
              "br",
              "ar",
              "cl",
              "es",
              "pe",
              "py",
              "uy",
              "us",
            ]}
          />
          <Box mt={2} mb={4} color="red" fontSize="sm">
            <ErrorMessage name={props.name} component="span" />
          </Box>
        </div>
      )}
    </Field>
  )
}

export default FormikPhoneInput
