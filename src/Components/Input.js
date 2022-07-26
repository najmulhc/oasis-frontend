import React from 'react' 
const Input = ({ type , label, placeholder, state}) => {
    
  return (
      <label htmlFor="" className=''>
          <h3>{ label}</h3>
          <input className='input w-full p-2 border border-[#696F79] rounded-md focus:border-[#1565D8] focus:shadow-md mt-1 mb-2 outline-none' type={type} placeholder={placeholder} onChange={e=> state(e.target.value)} required/>
     </label>
  )
}

export default Input