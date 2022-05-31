import React from 'react'
const Box = ({ color }) => {
  return (
    <div  style={{
        width: '160px',
        height: '160px',
        border: '2px solid black',
        backgroundColor: color,
        marginBottom: '10px',
        color: 'white',
        fontSize: '18px'
      }} className='box'>

          <h3>{color}</h3>
      
      </div>
  )
}

export default Box