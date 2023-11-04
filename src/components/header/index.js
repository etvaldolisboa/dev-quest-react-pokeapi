import '../../css/root.css'
import React from 'react';
import { Link } from "react-router-dom";
import { ThemeToggle } from '../theme-toggle-button';
import logoPokemon from '../../assets/images/logo-pokemon.png'
import '../../css/global.css'
import './index.css'
import { ThemeContext } from '../../context/theme-context';
import { useContext } from 'react';

const Header = ({ clearPage }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <header
      className='header flex-center-between transition'
      style={{ backgroundColor: theme.bgPrimary }}
    >
      <div className="container-header flex-center-between">
      <Link onClick={clearPage} to={'/'} alt='logo'>
        <img className='logo' src={logoPokemon} alt="Logo Pokemon" title='voltar' />
      </Link>
      <ThemeToggle />
      </div>
    </header>
  )
}
export { Header }