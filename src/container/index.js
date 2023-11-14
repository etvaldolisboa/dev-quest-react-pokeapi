export const Container = (props) => {
  return (
    <section style={{ minHeight: '100vh' }} >
      {props.children}
    </section>
  )
}