import React, { useState } from 'react';
import { Card } from '../../UI/Card/Card';
import vecindad from '../../../Images/vecindad.jpeg';
import { UILookingCharacter } from '../../UI/UILookingCharacter/UILookingCharacter';
import { UIButton } from '../../UI/UIButton/UIButton';


export const Main = () => {

  const URL = "https://apichavo.herokuapp.com/character/";

  const [chavo, setChavo] = useState({ 
    name:"La vecindad del Chavo",
    quote:"Que bonita Vecindad",
    URL: vecindad
  })

  const FetchApi=(event)=>{
    const input_value = event.target.value;
    if (event.keyCode === 13) {
      fetch(URL)
      .then(response=>response.json())
      .then(characters=>{
        characters.map(character=>{
          if (character.name.includes(input_value)) {
            setChavo(character)
          }
        })
      })
    }
  }

  return (
    <div className="div-main">
      <UILookingCharacter placeHolder="¿Qué personaje buscas?" event={FetchApi} />
      <main>
        <Card character={chavo} />            
    </main>    
    </div>
    
  )
}
