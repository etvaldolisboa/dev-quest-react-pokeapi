// import { useContext } from "react"
// import { ThemeContext } from "../../context/theme-context"

export const ButtonTheme = (props) => {
  // const { theme } = useContext(ThemeContext)

  return (
    <button {...props}
    style={{ border: 'none', backgroundColor: 'transparent', width: '35px', cursor: 'pointer' }}
    />
  )
}