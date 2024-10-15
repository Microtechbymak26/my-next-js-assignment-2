import React from 'react'
import cssstyle from './footer.module.css'
console.log(cssstyle)
const footer = () => {
  return (
    <>
    <div className={cssstyle.heading}>
      <p>This is a footer section</p>
      &copy;2024  made by MAK
    </div>

    </>
  )
}

export default footer




