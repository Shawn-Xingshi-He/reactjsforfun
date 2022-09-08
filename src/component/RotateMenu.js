import React from 'react'
import RotateCard from './RotateCard'
import './Menu.css';

const RotateMenu = () => {
  const temp = [...Array(6).keys()]
  return ( 
    <div className='menu'>
      <div className='cards'>
        {temp.map((item) => <RotateCard key={item} imageNum={item} />) }
      </div>
    </div>
    
  )
}

export default RotateMenu