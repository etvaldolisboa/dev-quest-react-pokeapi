export const ButtonTheme = (props) => {

  return (
    <button {...props}
      style={{
        border: 'none',
        backgroundColor: 'transparent',
        width: '2.8rem',
        cursor: 'pointer'
      }}
      type="button"
    />
  )
}