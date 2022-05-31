import React from 'react'
import Cell from './Cell'
const Row = ({item}) => {
  return (
    <tr>
        {Object.entries(item).map(([key, value]) => {
            return (
                <Cell key={key} value={JSON.stringify(value)}/>
            )
        })}
    </tr>
  )
}

export default Row