import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme-context"

import './index.css'

const PokemonDetails = ({
  name,
  image,
  types,
  abilities,
  moves,
  pokemon,
  index }) => {

  const { theme } = useContext(ThemeContext)

  return (
    <ul
      className='pokelist transition'
      style={{backgroundColor: theme.bgColor}}
    >
      <li className='card-details transition'
        key={index}
        style={{color: theme.color, background: theme.bgPrimary}}
      >
        <h2 className="info-pokemon">info pokemon</h2>
        <div className="img-details">
          <img className='image' src={image} alt={name} />
        </div>

        <ul className="dates-pokemon">
          <li className="info-details">
            <h3>name:</h3>
            <span className="name">{name}</span>
          </li>

          <li className="info-details">
            <h3>types:</h3>
            <ul className="types">
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
                  <ul className="abilities">
                    <li key={index}
                      className="ability">
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
            <ul className="moves">
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
      </li>

    </ul>
  )
}
export { PokemonDetails }