import React from 'react'
import ReactDOM from 'react-dom'
import './Dialog.scss'

const Dialog = ({ children, setIsDialog, ...props }) => {
  return (
    <>
      <div className="dialog">
        <div
          className={`dialog-content ${props.className}`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
      <div className="dialog-backdrop" onClick={props.onClose}></div>
    </>
  )
}

export default Dialog
