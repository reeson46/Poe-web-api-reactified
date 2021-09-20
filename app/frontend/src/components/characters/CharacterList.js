import React from 'react'
import LoadingCircle from '../LoadingCircle';
import { useState } from 'react';
import CharacterItem from './CharacterItem';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacterItems } from '../../state/action-creators/Actions';

const CharacterList = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.charsAndTabs.characters);
  const isLoading = useSelector(state => state.charsAndTabs.isLoading);
  const [chosen, setChosen] = useState();

  const onClick = (name, idx) => {
    if(idx !== chosen) {
      setChosen(idx);
      dispatch(getCharacterItems(name));
    }
  }

  const style = {
    position: "relative",
    left: "45%",
    top: "45%"
  }

  return (
    <div className="charactersContainer window-bg">
      <h2 className="title m-0">CHARACTERS</h2>
      <div className="ic">
        <div className="scrollbar">
          {isLoading ? 
            <div style={style}>
              <LoadingCircle size={60} thickness={3.6} />
            </div>
           : 
            characters.map((character, idx) => 
              <CharacterItem character={character} key={idx} active={idx === chosen} onClick={onClick} idx={idx} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CharacterList
