import React, { useContext } from "react";
import './index.css'

const Button = (props) => {
  return (
    <button
    className="button-mais transition"
      {...props}>
      Carregar Mais
    </button>
  )
}

export { Button }