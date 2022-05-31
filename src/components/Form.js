import React from 'react'
import Button from './Button'
import List from './List'
const Form = ({data, reqType, setReqType}) => {
  return (
    <div>
        <div className='nav'>
        <Button buttonText='Users' setReqType={setReqType}/>
        
        <Button buttonText="Posts" setReqType={setReqType}/>
        <Button buttonText="Comments" setReqType={setReqType}/>
        </div>
        
        <List data={data}/>
    </div>
  )
}

export default Form