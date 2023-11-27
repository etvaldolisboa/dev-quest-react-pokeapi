import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import styled from "styled-components";

export const Button = (props) => {
  const { theme } = useContext(ThemeContext)

  const Button = styled.button`
      border: none;
      background-color: transparent;
      padding: .4rem;
      cursor: pointer;

      font-size: var(--fs-big);
      font-weight: var(--fw-normal);
      text-transform: capitalize;
      letter-spacing: .2rem;
      color: ${theme.color};
      
      margin: 2rem 0 4rem;
      transition: 250ms all linear;

      &:hover{
        color: ${theme.hover};
        border-bottom: 1px solid;
      }`
  return (
    <Button {...props} type="button" />
  )
}