import React, { useContext } from "react";
import './index.css'


const Container = (props) => {
  return (
    <section
      className="container-section"
      >
      {props.children}
    </section>
  )
}

export { Container }