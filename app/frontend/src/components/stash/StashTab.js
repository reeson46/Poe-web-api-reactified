import React from 'react'

const StashTab = ({stashtab, active, onClick, idx}) => {
  const style = {
    backgroundColor : `rgb(${stashtab.color.r} ${stashtab.color.g} ${stashtab.color.b} /50%)`,
    border: `rgb(${stashtab.color.r/0.8} ${stashtab.color.g/0.8} ${stashtab.color.b/0.8}) 2px solid`,
  }

  return (
    <button 
      className={`stashbtn ${active ? 'selectedTab' : ''}`} 
      onClick={() => onClick(stashtab.index)} 
      style={style}
      >
        {stashtab.name}
      </button>
                   
  )
}

export default StashTab
