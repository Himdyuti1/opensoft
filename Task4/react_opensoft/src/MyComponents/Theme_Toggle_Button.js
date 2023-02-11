import React, { useContext } from 'react'
import { ThemeContext } from '../App'

export const Theme_Toggle_Button = () => {
    const user=useContext(ThemeContext)
  return (
    <div>
        <button onClick={user.toggleTheme}>Change Theme</button>
    </div>
  )
}
