import React, { useState, useEffect } from "react"

import { Field, ErrorMessage, useField, setFieldValue } from "formik"

// Mobile phone input imports
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

const FormikPhoneInput = ({ label, ...props }) => {
  const [field] = useField(props)

  useEffect(() => {
    props.setValue("Phone", "+598 ")
  }, [])

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
            onChange={phone => props.setValue("Phone", `+${phone} `)}
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
          <ErrorMessage name={props.name} component="span" />
        </div>
      )}
    </Field>
  )
}

export default FormikPhoneInput
