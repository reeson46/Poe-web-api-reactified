import React from 'react'
import { useState } from 'react'
import ItemPopover from '../ItemPopover'

const EquipmentItem = ({item, flask, placement}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = e => {
    setAnchorEl(e.currentTarget);
  }

  const handlePopoverClose = () => {
   setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  return (
    <div 
      className={`itemContainer ${item.inventoryId} ${flask}`}
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <ItemPopover 
        open={open}
        anchorEl={anchorEl}
        item={item}
      />
      <div className={`iconContainer ${placement}`}>
        <div className="icon">
          <img src={item.icon}/>
        </div>
      </div>
    </div>
  )
}

export default EquipmentItem
