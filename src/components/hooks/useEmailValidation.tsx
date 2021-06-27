import { useEffect, useState } from 'react'

export const useEmailValidation = ({
  userEmail = '',
  requiredEmailLength = 64
}) => {
  const [validEmail, setValidEmail] = useState(null)
  const [validEmailLength, setValidEmailLength] = useState(null)
  console.log(userEmail)

  useEffect(() => {
    console.log('testing emails')
    console.log(userEmail)
    console.log(requiredEmailLength)
    setValidEmail(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        userEmail
      )
    )
    setValidEmailLength(userEmail.length <= requiredEmailLength ? true : false)
    console.log(validEmailLength)
    console.log(validEmail)
  }, [userEmail, requiredEmailLength])
  return [validEmail, validEmailLength, userEmail]
}
