import React, { useState, useEffect, useContext } from 'react'
import ThemeContext from './ThemeContext'
import styled from 'styled-components'

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState()
  const useTheme = window.matchMedia('(prefers-color-scheme: dark)')

  // Theme Switch
  useEffect(() => {
    if (theme) {
      document.body.setAttribute('data-theme', 'light')
    } else {
      document.body.setAttribute('data-theme', 'dark')
    }
  }, [theme])

  function toggleTheme() {
    setTheme(!theme)
  }

  function checkUseTheme(query) {
    if (query.matches) {
      document.body.setAttribute('data-theme', 'dark')
    } else {
      document.body.setAttribute('data-theme', 'light')
    }
  }
  checkUseTheme(useTheme)
  useTheme.addListener(checkUseTheme)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeSwitch />
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider

function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <SwitchBox>
      <div className="d-grid">
        <button
          className={`btn py-1 px-3 rounded-full ${
            theme ? 'bg-dark text-white' : 'bg-light text-black'
          }`}
          onClick={toggleTheme}
        >
          {theme ? 'Dark Mode 🌙' : 'Light Mode 🌈'}
        </button>
      </div>
    </SwitchBox>
  )
}

const SwitchBox = styled.div`
  z-index: 10;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`
