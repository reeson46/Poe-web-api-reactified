import React from 'react'
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: '#fff',
    textAlign: 'center',
    padding: '5px 0'
  }
}))

const ItemPopover = (props) => {
  const classes = useStyle();

  return (
    <Popover
      open={props.open}
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      className={classes.popover}
      classes={{
        paper: classes.paper
      }}
    >
      <div className={`itemName md regionColor${props.item.frameType}`}>
        <p className={`m-0 frameType${props.item.frameType}`}>{props.item.name}</p>
        <p className={`m-0 frameType${props.item.frameType}`}>{props.item.typeLine}</p>
      </div>
      <div className="itemMod">
        {props.item.fracturedMods ? props.item.fracturedMods.map((mod, idx) => <p key={idx} className="fracturedMod textMod">{mod}</p>) : ""}
        {props.item.utilityMods ? props.item.utilityMods.map((mod, idx) => <p key={idx} className="affixMod textMod">{mod}</p>) : ""}
        {props.item.implicitMods ? props.item.implicitMods.map((mod, idx) => <p key={idx} className="affixMod textMod">{mod}</p>) : ""}
        {props.item.explicitMods ? props.item.explicitMods.map((mod, idx) => <p key={idx} className="affixMod textMod">{mod}</p>) : ""}
        {props.item.craftedMods ? props.item.craftedMods.map((mod, idx) => <p key={idx} className="craftedMod textMod">{mod}</p>) : ""}
        {props.item.craftedMods ? <p className="corrupted textMod">Corrupted</p> : ""}
      </div>
    </Popover>
  )
}

export default ItemPopover
