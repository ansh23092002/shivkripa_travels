import React from 'react'

const Button = ({title, containterClass}) => {
  return (
    <div className={`p-2 z-15   rounded-2xl border text-white w-35 items-center  ${containterClass}`}>
  <p className=''>{title}</p>
    </div>
  )
}

export default Button
