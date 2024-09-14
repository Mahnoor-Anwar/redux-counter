import React from 'react'
import { useSelector } from 'react-redux'


const Header = () => {

    const {counter} = useSelector((state)=>state.counterReducer)
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Count:{counter}</h1>
    </div>
  )
}

export default Header
