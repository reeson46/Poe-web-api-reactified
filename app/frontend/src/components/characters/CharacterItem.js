import React from 'react'

const CharacterItem = ({character, active, onClick, idx}) => {
  return (
    <div className={`characterWindow ${active ? 'selectedCharacter' : ''}`} onClick={() => onClick(character.name, idx)}>
      <div className={`icon ${character.class}`}></div>
      <div className="name pl-10 pt-5">{character.name}</div>
      <div className="level-class pl-10">Level {character.level} {character.class}</div>
      <div className="league pl-10">{character.league} League</div>  
    </div>
  )
}

export default CharacterItem
