import React from 'react'

const Step = ({step, detail}) => {
  return (
    <div className="flex  flex-col items-end ">
          <p className="text-[#BDBDBD] text-[14px] ">STEP 0{step }/03</p>
    <h4 className="text-[16px] font-semibold text-[#8692A6]">
    {detail}
    </h4>
  </div>
  )
}

export default Step