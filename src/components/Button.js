import React from 'react'

const Button = ({ setReqType, buttonText}) => {
  return (
    <button onClick={() => setReqType(buttonText)}>{buttonText}</button>
  )
}

export default Button