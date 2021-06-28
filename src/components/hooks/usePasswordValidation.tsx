import { useEffect, useState } from 'react'

export const usePasswordValidation = ({
  firstPassword = '',
  secondPassword = '',

  requiredPasswordLength = 6
}) => {
  const [validPasswordLength, setValidPasswordLength] = useState<boolean>(false)
  const [hasNumber, setHasNumber] = useState<boolean>(false)
  const [upperCase, setUpperCase] = useState<boolean>(false)
  const [lowerCase, setLowerCase] = useState<boolean>(false)
  const [match, setMatch] = useState<boolean | string>(false)

  useEffect(() => {
    setValidPasswordLength(
      firstPassword.length >= requiredPasswordLength ? true : false
    )
    setUpperCase(firstPassword.toLowerCase() !== firstPassword)
    setLowerCase(firstPassword.toUpperCase() !== firstPassword)
    setHasNumber(/\d/.test(firstPassword))
    setMatch(firstPassword && firstPassword === secondPassword)
  }, [firstPassword, secondPassword, requiredPasswordLength])
  return [
    validPasswordLength,
    hasNumber,
    upperCase,
    lowerCase,
    match,
    firstPassword,
    secondPassword
  ]
}
