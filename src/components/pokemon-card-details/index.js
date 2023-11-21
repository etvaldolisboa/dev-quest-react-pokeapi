import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme-context"
import { Link } from "react-router-dom";
import { Button } from "../button";
import styled from "styled-components";

export const PokemonDetails = ({
  name,
  id,
  image,
  types,
  abilities,
  moves,
  clearPage,
  index }) => {
  const { theme } = useContext(ThemeContext)

  const PokeList = styled.main`
    padding: var(--p-mobile);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${theme.bgColor} ;
  `
  const CardDetails = styled.div`
    margin: 10vh 0 2vh;
    max-width: 76.8rem;
    border-radius: 1.8rem;
    padding: 2vh 2vw;
    border: 1px solid;
    color: ${theme.color};
    background-color: ${theme.bgPrimary};
  
    h2{
      font-size: var(--fs-big);
      text-align: center; 
    }
  
  `
  const ImageDetails = styled.div`
    border-radius: .6rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    margin: 1.5vh 0;
    background-color: ${theme.bgImg};
    
    img{
      padding: 1rem;
      max-width: 22.6rem;
      width: 50%;
      filter:
      brightness(90%) contrast(85%) saturate(80%);
    }
  `
  const Dates = styled.ul`
    font-size: var(--fs-normal);
    text-transform: capitalize;
    text-align: justify;

    span, ul{
      background-color: ${theme.bgInputInfo};
      padding: .4rem;
      font-weight: var(--fw-light);
      border-radius: 8px;
      display: flex;
      flex-wrap: wrap;
    }
    ul{
      margin: .4rem 0 1.2rem;
    }
  `
  return (
    <PokeList >
      <CardDetails key={index}>
        <h2>info pokemon</h2>
        <ImageDetails>
          <img src={image} alt={name} />
        </ImageDetails>
        <Dates>
          <li >
            <h3>name:</h3>
            <span>{name} #{id}</span>
          </li>
          <li  >
            <h3>types:</h3>
            <ul >
              {types?.map((type, index) => {
                return (
                  <li key={index}>
                    <span>
                      {type.type.name}
                    </span>
                  </li>
                )
              })}
            </ul>
          </li>
          <li>
            <h3>abilities:</h3>
            {abilities.map((ability, index) => {
              return (
                <ul  >
                  <li key={index} >
                    <h3>{ability.name}: </h3>
                    {ability.effect_entries.map((effect, index) => {
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
          <li>
            <h3>moves:</h3>
            <ul>
              {moves?.map((move, index) => {
                return (
                  <li key={index}>
                    <span>
                      {move.move.name};
                    </span>
                  </li>
                )
              }).slice(0, 15)}
            </ul>
          </li>
        </Dates>
      </CardDetails>
      <Link to={'/'}>
        <Button onClick={clearPage}>Back to Pokemons</Button>
      </Link>
    </PokeList>
  )
}