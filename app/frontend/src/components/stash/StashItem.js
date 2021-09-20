import React from 'react'

const StashItem = ({item}) => {
  return (
    <div className="item">
      <div className='icon'>
        <img src={item.icon} />
      </div>
      <div className='name'>
        <h2>{item.typeLine}</h2>
      </div>
      <div className='pk-link'>
      {item.ninjaUrl ? (
        <a href={item.ninjaUrl}>
          <button className='poeNinjaBtn'>Poe Ninja</button>
        </a>)
      :
      ""
      }
      </div>
      <div className='quantity'>
        <h2>{item.quantity}</h2>
      </div>
    </div>
  )
}

export default StashItem
