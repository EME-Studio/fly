const handleManana = str => {
  const newStr = (str = "manana" ? "mañana" : str)

  return newStr
}

const handleSpaces = str => {
  const newStr = str.replace(/([A-Z])/g, " $1").trim()

  return newStr
}

export { handleManana, handleSpaces }
