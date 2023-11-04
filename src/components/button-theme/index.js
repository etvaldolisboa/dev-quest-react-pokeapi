import { useContext } from "react"
import { ThemeContext } from "../../context/theme-context"

export const ButtonTheme = (props) => {
  const { theme } = useContext(ThemeContext)

  console.log('button themes', theme);
  return (
    <button {...props}
    style={{ border: 'none', background: 'transparent', width: '40px', cursor: 'pointer' }}
    />
  )
}