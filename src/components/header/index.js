import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { ThemeContext } from '../../context/theme-context';
import { ThemeToggle } from '../theme-toggle-button';
import '../../css/global.css'
import './index.css'

const Header = ({ clearPage }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <header className='header' style={{ backgroundColor: theme.bgPrimary }}>
      <div className="container-header flex-center-between">
        <Link onClick={clearPage} to={'/'} alt='logo'>
          <h1 className='pokemon-text' title='home'>Pokeapi Dev Quest</h1>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}
export { Header }