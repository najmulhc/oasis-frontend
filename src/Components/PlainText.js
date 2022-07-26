import React from 'react'

const PlainText = ({children, className}) => {
  return (
    <p className={`text-left text-[#8692A6] leading-5 mt-1 ${className}`}>{children}</p>
  )
}

export default PlainText