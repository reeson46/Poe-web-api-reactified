import React from 'react'
import { useState } from 'react'
import ItemPopover from '../ItemPopover'

const InventoryItem = ({item, placement}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = e => {
    setAnchorEl(e.currentTarget);
  }

  const handlePopoverClose = () => {
   setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  const style = {
    top: `calc(${item.y} * 47px)`,
    left: `calc(${item.x} * 47px)`,
  }
  return (
    <div 
      className='inventoryItem' style={style}
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
          <img src={item.icon} />
          <span className="stackSize">{item.stackSize}</span>
        </div>
      </div>
    </div>
  )
}

export default InventoryItem
