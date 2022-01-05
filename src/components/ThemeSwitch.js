import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const SwitchBox = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem;
  width: 200px;
`

function ThemeSwitch() {
  const [toggleTheme, setToggleTheme] = useState()

  // Theme Switch
  useEffect(() => {
    document.body.setAttribute('data-theme', 'dark')

    if (toggleTheme) {
      document.body.setAttribute('data-theme', 'light')
    }
  })

  const isToggle = () => {
    setToggleTheme(!toggleTheme)
  }

  return (
    <SwitchBox>
      <div className="d-grid">
        <button
          className={`btn btn-black ${toggleTheme ? 'active' : ''}`}
          onClick={isToggle}
        >
          <i className="bx bx-fw bxs-adjust-alt"></i>
          {toggleTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </SwitchBox>
  )
}

export default ThemeSwitch
