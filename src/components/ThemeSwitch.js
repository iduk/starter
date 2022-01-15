import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

const SwitchBox = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem;
  width: 200px;
`
const ThemeContext = React.createContext('theme')

function ThemeSwitch() {
  const [theme, setTheme] = useState(false)

  // Theme Switch
  useEffect(() => {
    document.body.setAttribute('data-theme', 'dark')

    if (theme) {
      document.body.setAttribute('data-theme', 'light')
    }
  }, [theme])

  const isToggle = () => {
    setTheme(!theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, isToggle }}>
      <SwitchBox>
        <div className="d-grid">
          <ThemeToggler />
        </div>
      </SwitchBox>
    </ThemeContext.Provider>
  )
}
export default ThemeSwitch

function ThemeToggler() {
  const { theme, isToggle } = useContext(ThemeContext)

  return (
    <div>
      <button
        className={`btn btn-black ${theme ? 'active' : ''}`}
        onClick={isToggle}
      >
        <i className="bx bx-fw bxs-adjust-alt"></i>
        {theme ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}
