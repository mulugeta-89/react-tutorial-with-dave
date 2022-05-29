import React from 'react'

const Input = ({ handleSubmit, color, setColor}) => {
  return (
    <form className='form' onSubmit={(e) => e.preventDefault()}>
        <input
        className="input1" 
        type="text"
        value={color}
        placeholder='Enter the name of the color'
        onChange={(e) => setColor(e.target.value)}
        onSubmit={handleSubmit}
      />
    </form>
  )
}

export default Input