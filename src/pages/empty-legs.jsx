import React from "react"
import useEmptyLegs from "../hooks/useEmptyLegs"

function emptyLegs() {
  const response = useEmptyLegs()
  console.log(response)

  return <div>Hello World</div>
}

export default emptyLegs
