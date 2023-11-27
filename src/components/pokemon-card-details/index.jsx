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

  const { theme } = useContext(ThemeContext);
  const PokeList = styled.main`
      min-height: 95vh;
      padding: var(--p-mobile);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: ${theme.bgColor} ;
    `
  const CardDetails = styled.div`
      max-width: 124rem;
      width: 100%;
      display: grid;
      grid-template-areas:
      'title title' 
      'imagaDetails description';
      grid-template-columns: 1fr 1fr;
      border-radius: 1.8rem;
      padding: 2rem;
      color: ${theme.color};
      background-color: ${theme.bgPrimary};
      gap: 15px;
      margin-top: 10vh;
      
      h2{
        grid-area: title;
        margin: 1.5rem 0;
        font-size: var(--fs-extra);
        font-weight: var(--fw-bold);
        text-align: center; 
        }
      
      @media (max-width: 600px) {
          display: block;
      }
    `
  const ImageDetails = styled.div`
      grid-area: imagaDetails;
      position: relative;

      .image{
        position: relative;
        background: ${theme.bgInfo};
        border-radius: 1.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%
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

    @media (max-width: 600px) {
        img{
          max-width: 20rem;
        }
    }
    `
  const Dates = styled.div`
      grid-area: description;
      font-size: var(--fs-normal);
      justify-content: space-between;
      display: flex;
      flex-direction: column;


      h3{
        font-weight: var(--fw-bold);
        margin: .65rem 0 1rem;
        cursor: pointer;
      }
      
      .item {
        padding: 1rem;
        border-radius: 8px;
        background-color: ${theme.bgInfo};
        gap: .5rem;
        text-transform: capitalize;
      }
     
      .type{
        display: flex;
      }
      
      .ability {
        diplay: flex;
        flex-direction: column;
        padding-bottom: .75rem
      }
      
      .move {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      
      @media (max-width: 600px) {
        .item:nth-child(n+3) {
          overflow-y: auto;
          height: 8.5vh;
        }
    `
  return (
    <PokeList>
      <CardDetails key={index}>
        <h2>Pokemon {name} Information</h2>
        <ImageDetails>
          <div className="image">
            <img src={image} alt={name} />
            <h2 className="id">#{id}</h2>
          </div>
        </ImageDetails>
        <Dates>
          <h3>types:</h3>
          <ul className="item type">
            {types?.map((type, index) => {
              return (
                <li key={index} >
                  <span>{type.type.name}</span>
                </li>
              )
            })}
          </ul>
          <h3>abilities:</h3>
          <ul className="item">
            {abilities.map((ability, index) => {
              return (
                <li key={index} className="ability">
                  <h3>{ability.name}: </h3>
                  {ability.effect_entries.map((effect, index) => {
                    if (effect.language.name.includes('en')) {
                      return (
                        <p key={index}>{effect.effect};</p>
                      )
                    }
                  })
                  }

                </li>
              )
            }).slice(0, 5)
            }
          </ul>
          <h3>moves:</h3>
          <ul className="item move">
            {moves?.map((move, index) => {
              return (
                <li key={index}>
                  <span> {move.move.name};</span>
                </li>
              )
            }).slice(0, 30)}
          </ul>
        </Dates>
      </CardDetails>
      <Link to={'/'}>
        <Button onClick={clearPage}>Back to Pokemons</Button>
      </Link>
    </PokeList>

  )

}