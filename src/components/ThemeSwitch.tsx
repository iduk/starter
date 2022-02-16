import * as React from 'react'
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

function ThemeSwitch() {
  const [toggleTheme, setToggleTheme] = useState(false)

  // Theme Switch
  useEffect(() => {
    document.body.setAttribute('data-theme', 'light')

    if (toggleTheme) {
      document.body.setAttribute('data-theme', 'dark')
    } else {
      document.body.setAttribute('data-theme', 'light')
    }
  })

  const isToggle = () => {
    setToggleTheme(!toggleTheme)
  }

  const SwitchBox = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    padding: 1rem;
    width: 200px;
  `

  return (
    <SwitchBox>
      <div className="d-grid">
        <button
          className={`btn btn-black ${toggleTheme ? 'active' : ''}`}
          onClick={isToggle}
        >
          {toggleTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </SwitchBox>
  )
}

export default ThemeSwitch
