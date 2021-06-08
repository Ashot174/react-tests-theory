import React from 'react'
import Character from './Character'

const App = ({side}) => {
  if(!side) {
    side = 'light'
  }

  const characters = [
    {name: 'Luk Skyworker', side: 'light'},
    {name: 'Joda', side: 'light'},
    {name: 'Obivan kenoby', side: 'light'},
    {name: 'Palpatyn', side: 'dark'},
    {name: 'Dart Wider', side: 'dark'},
  ]

  const filteredChars = characters.filter(char => char.side ===side)

  return (
      <ul>
        {
          filteredChars.map((char, index) => (
              <Character key={char.name + index} name={char.name} side={char.side} />
          ))
        }
      </ul>
  )
}
export default App;
