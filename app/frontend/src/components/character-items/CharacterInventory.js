import React from 'react'
import LoadingCircle from '../LoadingCircle'
import { useSelector } from 'react-redux';
import InventoryItem from './InventoryItem';

const CharacterInventory = () => {
  const items = useSelector(state => state.characterItems.inventory);

  const inventoryItems = items.map((item, idx) => {
    var placement = "";
    if (item.inventoryId == "Weapon" || item.inventoryId == "Offhand") {
      if (item.height == 3) {
        placement = "placement";
      } 
      else if (item.height == 2) {
        placement = "placement2";
      }
    }

    return <InventoryItem key={idx} item={item} placement={placement} />
    
  })

  return (
    <div className="mainInventoryContainer window-bg">
      <h2 className="title m-0">INVENTORY</h2>
      <div className="inner ic">
        <div className="inventoryItems">
          <div className="grid">
            {Array.from({length:60}, (_, i) =>
            <div key={i} className="gridLines" />)}
          </div>
          <div className="itemsToDisplay" id="itemsToDisplay">
            {inventoryItems}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterInventory
