import { useEffect, useState } from 'react'

export const usePasswordValidation = ({
  firstPassword = '',
  secondPassword = '',
  //   userEmail = '',
  requiredPasswordLength = 6
  //   requiredEmailLength = 64
}) => {
  const [validPasswordLength, setValidPasswordLength] = useState(null)
  const [hasNumber, setHasNumber] = useState(null)
  const [upperCase, setUpperCase] = useState(null)
  const [lowerCase, setLowerCase] = useState(null)
  const [match, setMatch] = useState(null)
  //   const [validEmail, setValidEmail] = useState(null)
  //   const [validEmailLength, setValidEmailLength] = useState(null)

  useEffect(() => {
    setValidPasswordLength(
      firstPassword.length >= requiredPasswordLength ? true : false
    )
    setUpperCase(firstPassword.toLowerCase() !== firstPassword)
    setLowerCase(firstPassword.toUpperCase() !== firstPassword)
    setHasNumber(/\d/.test(firstPassword))
    setMatch(firstPassword && firstPassword === secondPassword)
    // setValidEmail(
    //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    //     userEmail
    //   )
    // )
    // setValidEmailLength(userEmail.length <= requiredEmailLength ? true : false)
  }, [
    firstPassword,
    secondPassword,
    // userEmail,
    requiredPasswordLength
    // requiredEmailLength
  ])
  return [
    validPasswordLength,
    hasNumber,
    upperCase,
    lowerCase,
    match,
    // validEmail,
    // validEmailLength,
    firstPassword,
    secondPassword
    // userEmail
  ]
}
