import React from 'react'
import Li from './Li'
const List = ({data}) => {
  return (
    <ul>
        {data.map((item) => (
                <Li item={item}/>
        ))}
    </ul>
  )
}

export default List