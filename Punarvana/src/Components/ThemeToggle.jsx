import { useState } from 'react'
function ThemeToggle() {
  const [dark, setDark] = useState(false)
  return (
    <button onClick={() => setDark(!dark)}>{dark ? '🌙' : '☀️'}</button>
  )
}
export default ThemeToggle