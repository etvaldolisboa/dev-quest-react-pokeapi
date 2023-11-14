export const ButtonTheme = (props) => {

  return (
    <button {...props}
      style={{
        border: 'none',
        backgroundColor: 'transparent',
        width: '2.8rem',
        cursor: 'pointer',
        transition: '300ms ease-in-out all'
      }}
      type="button"
    />
  )
}