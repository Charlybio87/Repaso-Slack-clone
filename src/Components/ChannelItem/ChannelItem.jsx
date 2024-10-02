import React from 'react'

const ChannelItem = ( {id, nombre} ) => {
  return (
    <div key={id}>
      <a href="#">
        {nombre}
      </a>
    </div>
  )
}

export default ChannelItem