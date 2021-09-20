import React from 'react'
import Layout from './Layout'
import LoadingCircle from '../LoadingCircle'
import EquipmentItem from './EquipmentItem'
import { useSelector } from 'react-redux'

const CharacterEquipment = () => {
  const items = useSelector(state => state.characterItems.equipment);
  const isLoading = useSelector(state => state.characterItems.isLoading);

  const style = {
    marginLeft: "228px",
    marginTop: "130px",
  }

  const equipmentItems = items.map((item, idx) => {
    var flask = "";
    if (item.flask != "") {
      flask = `Flask${item.flask}`;
    }

    var placement = "";
    if (item.inventoryId == "Weapon" || item.inventoryId == "Offhand") {
      if (item.height == 3) {
        placement = "placement";
      } 
      else if (item.height == 2) {
        placement = "placement2";
      }
    }

    return <EquipmentItem key={idx} item={item} flask={flask} placement={placement} />
  })

  return (
    <div className="characterItemsContainer window-bg">
      <h2 className="title m-0">EQUIPMENT</h2>
      <div className="ic">
        <Layout />
        <div className="equippedItemsContainer" id="equippedItemsContainer">
          {isLoading ? 
            <div style={style}>
              <LoadingCircle size={150} thickness={2} />
            </div>
            :
            equipmentItems
          }
        </div>  
      </div>
    </div>
  )
}

export default CharacterEquipment
