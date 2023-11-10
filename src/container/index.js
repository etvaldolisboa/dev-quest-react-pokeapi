import React, { useContext } from "react";
// import './index.css'


const Container = (props) => {
  return (
    <section
      className="container-section"
      style={{minHeight: '100vh'}}
      >
      {props.children}
    </section>
  )
}

export { Container }