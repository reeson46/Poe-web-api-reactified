import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTransition, animated } from 'react-spring';
import CharacterList from './characters/CharacterList'
import CharacterEquipment from './character-items/CharacterEquipment';
import CharacterInventory from './character-items/CharacterInventory';
import Stash from './stash/Stash'
import About from './About';
import { getCharsAndTabs } from '../state/action-creators/Actions';
import { IconContext } from "react-icons";
import { GiInfo } from 'react-icons/gi'
import { IoIosCloseCircleOutline } from 'react-icons/io'

const MainLayout = () => {
  const dispatch = useDispatch();
  const [isAbout, setIsAbout] = useState(false);
  
  useEffect(() => {
    dispatch(getCharsAndTabs());
  }, []);

  const onAboutClick = () => {
    setIsAbout(!isAbout);
  }

  const aboutWindowTransition = useTransition(
    isAbout, {
      from: {x: 73, y: 4, position: "absolute", zIndex: "2"},
      enter: {x: -480, y: 4, position: "absolute", zIndex: "2"},
      leave: {x: 73, y: 4, position: "absolute", zIndex: "2"},
    }
  )

  return (
    <div className="mainLayout">
      <div className="aboutWrapper">
        <div className="aboutIcon">
          <IconContext.Provider value={{
            size: "2.5rem",
          }}>
            {!isAbout ? 
              <GiInfo onClick={onAboutClick} />
              :
              <IoIosCloseCircleOutline onClick={onAboutClick} />
            }
          </IconContext.Provider>
        </div>
        {aboutWindowTransition((style, item) =>
            item ?
            <animated.div style={style}>
              <About />
            </animated.div> : ""
        )}
      </div>
      <CharacterList />
      <div className="characterItemsLayout">
        <CharacterEquipment />
        <CharacterInventory />
      </div>
      <Stash />
    </div>
  )
}

export default MainLayout
