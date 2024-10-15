import React from 'react'
import cssstyle from './header.module.css'
console.log(cssstyle)

const header = () => {
  return (
    <div className={cssstyle.heading}>
      This is a header section
    </div>
  )
}

export default header
