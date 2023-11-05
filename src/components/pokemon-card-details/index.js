import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme-context"

import './index.css'

const PokemonDetails = ({
  name,
  image,
  types,
  abilities,
  moves,
  index }) => {

  const { theme } = useContext(ThemeContext)

  return (
    <section
      className='pokelist transition'
      style={{ backgroundColor: theme.bgColor }}
    >
      <div className='card-details transition'
        key={index}
        style={{ color: theme.color, backgroundColor: theme.bgPrimary }}
      >
        <h2 className="info-pokemon">info pokemon</h2>
        <div className="img-details"
              style={{ backgroundColor: theme.bgImg}}
        
        >
          <img className='image' src={image} alt={name} />
        </div>

        <ul className="dates-pokemon">
          <li className="info-details">
            <h3>name:</h3>
            <span className="name"
             style={{ backgroundColor: theme.bgInputInfo}}
            >{name}</span>
          </li>

          <li
            className="info-details"
          >
            <h3>types:</h3>
            <ul className="types"
            style={{ backgroundColor: theme.bgInputInfo}}
            
            >
              {types?.map((type, index) => {
                return (
                  <li
                  className="type"
                  
                  key={index}
                  >
                    <span>
                      {type.type.name}
                    </span>
                  </li>
                )
              })}
            </ul>
          </li>
          <li className="info-details">
            <h3>abilities:</h3>
            {
              abilities.map((ability, index) => {
                return (
                  <ul className="abilities"
                  style={{ backgroundColor: theme.bgInputInfo}}
                  
                  >
                    <li key={index}
                      className="ability"
                      
                      >
                      <h3>{ability.name}: </h3>
                      {
                        ability.effect_entries.map((effect, index) => {
                          if (effect.language.name.includes('en')) {
                            return (
                              <p key={index}>{effect.effect}</p>
                            )
                          }
                        })
                      }

                    </li>
                  </ul>
                )
              }).slice(0, 2)
            }
          </li>
          <li className="info-details">
            <h3>moves:</h3>
            <ul className="moves"
              style={{ backgroundColor: theme.bgInputInfo}}
            
            >
              {moves?.map((move, index) => {
                return (
                  <li key={index}
                  className="move">
                    <span>
                      {move.move.name}
                    </span>
                  </li>
                )
              }).slice(0, 15)}
            </ul>
          </li>
        </ul>
      </div>
<button>voltar</button>
    </section>
  )
}
export { PokemonDetails }