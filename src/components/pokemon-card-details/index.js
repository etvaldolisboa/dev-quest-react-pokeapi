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
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${theme.bgColor} ;
    `
  const CardDetails = styled.div`
    margin: 10vh 0 2vh;
    max-width: 124rem;
    display: grid;
    grid-template-areas:
     'title title' 
     'imagaDetails description';
    grid-template-columns: 35% auto;
    border-radius: 1.8rem;
    padding: 2rem;
    color: ${theme.color};
    background-color: ${theme.bgPrimary};
    gap: 15px;
  
    h2{
      grid-area: title;
      margin: 1.5rem 0;
      font-size: var(--fs-extra);
      font-weight: var(--fw-bold);
      text-align: center; 
    }
  `
  const ImageDetails = styled.div`
    grid-area: imagaDetails;
    position: relative;

    .image{
      position: relative;
      background: ${theme.bgInfo};
      border-radius: 1.8rem;
    }

    img{
      padding: 1rem;
      max-width: 48rem;
    }
    .id{
      position: absolute;
      color: ${theme.color};
      bottom: 0;
      left: 1rem;
    }
  
    div{
      display: flex;
      justify-content: space-around;
      margin-top: 1rem;
      align-items: center;
    }

    h3{
      margin: 1rem 0;
      font-size: var(--fs-big);
    }

    ul, li{
      display: flex;
      gap: 1rem;
    }

    span{
      text-transform: capitalize;
      font-size: var(--fs-normal);
      background-color: ${theme.bgInfo};
      padding: .5rem;
      border-radius: 8px;
      display: inline-flex;
    }
  `
  const Dates = styled.div`
    grid-area: description;
    font-size: var(--fs-normal);
    text-transform: capitalize;
    text-align: justify;

    span, ul{
      background-color: ${theme.bgInfo};
      padding: .5rem;
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
    <PokeList>
      <CardDetails key={index}>
        <h2>info pokemon</h2>
        <ImageDetails>
          <div className="image">
            <img src={image} alt={name} />
            <h2 className="id">#{id}</h2>
          </div>

          <div>
            <h3>name:  <span>{name}</span> </h3>
            <h3>types:</h3>
            <ul>
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
          </div>
        </ImageDetails>
        <Dates>
          <div>
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
          </div>
          <div>
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
              }).slice(0, 30)}
            </ul>
          </div>
        </Dates>
      </CardDetails>
      <Link to={'/'}>
        <Button onClick={clearPage}>Back to Pokemons</Button>
      </Link>
    </PokeList>
  )
}