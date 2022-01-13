import React from 'react'
import ReactDOM from 'react-dom'
import { Outlet } from 'react-router-dom'

const Dialog = ({ setIsDialog }) => {
  return (
    <div>
      <DialogContent>
        <button onClick={() => setIsDialog(false)}>onClose</button>
        <Outlet />
      </DialogContent>
      <div className="dialog-backdrop" onClick={() => setIsDialog(false)}></div>
    </div>
  )
}
export default Dialog

const DialogContent = ({ children }) => {
  return (
    <div className="dialog">
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
