import { useEffect, useState } from 'react'

export const useEmailValidation = ({
  userEmail = '',
  requiredEmailLength = 64
}) => {
  const [validEmail, setValidEmail] = useState<boolean>(false)
  const [validEmailLength, setValidEmailLength] = useState<boolean>(false)

  useEffect(() => {
    setValidEmail(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        userEmail
      )
    )
    setValidEmailLength(userEmail.length <= requiredEmailLength ? true : false)
  }, [userEmail, requiredEmailLength])
  return [validEmail, validEmailLength, userEmail]
}
