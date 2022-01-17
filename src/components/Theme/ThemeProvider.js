import React, { useState, useEffect, useContext } from 'react'
import ThemeContext from './ThemeContext'
import styled from 'styled-components'

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false)

  // Theme Switch
  useEffect(() => {
    document.body.setAttribute('data-theme', 'dark')
    window.localStorage.setItem('theme', 'dark')

    if (theme === true) {
      document.body.setAttribute('data-theme', 'light')
      window.localStorage.setItem('theme', 'light')
    }
  }, [theme])

  function toggleTheme() {
    setTheme(!theme)
  }

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
          className={`btn py-2 px-4 rounded-full ${
            theme ? 'bg-gray-800 text-white' : 'bg-white text-black'
          }`}
          onClick={toggleTheme}
        >
          {theme ? '🌝 Dark Mode' : '🌚 Light Mode'}
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
