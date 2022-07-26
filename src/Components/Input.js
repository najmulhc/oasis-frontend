import React from 'react' 
const Input = ({ type , label, placeholder}) => {
    
  return (
      <label htmlFor="" className=''>
          <h3>{ label}</h3>
          <input className='input w-full p-2 border border-[#696F79] rounded-md focus:border-[#1565D8] focus:shadow-md my-2 outline-none' type={type} placeholder={placeholder} required/>
     </label>
  )
}

export default Input