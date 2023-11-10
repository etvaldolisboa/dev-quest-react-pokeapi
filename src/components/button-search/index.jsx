import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
// import './index.css'
import styled from "styled-components";

const Button = (props) => {
  const { theme } = useContext(ThemeContext)

  const Button = styled.button`
  padding: .4rem;
  font-weight: var(--fw-bold);
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  font-size: clamp(1rem, 1.2rem + 1vw, 2rem);
  letter-spacing: .2rem;
  margin-bottom: 4rem;
  color: ${theme.bgPrimary};

  &:hover{
    color: ${theme.hiperlink};
  // border-bottom: 1px solid;

  }
`

  return (
    <Button
      className="button-mais transition"
      type="button"
      {...props}
      // style={{ color: theme.bgPrimary }}
    >
      carregar mais pokemons...
    </Button>
  )
}

export { Button }