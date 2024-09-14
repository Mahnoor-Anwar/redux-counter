import React from 'react'
import { useDispatch } from 'react-redux'
import { addCounter, delCounter } from './store/slice/createSlice'
import './App.css'

const Button = () => {

    const dispatch = useDispatch()

    const incremenet  = () => {
        dispatch(addCounter())
    }
    const decrement  = () => {
        dispatch(delCounter())
    }
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <button className='button' onClick={()=>incremenet()}>add</button>
      <button className='button' onClick={()=>decrement()}>del</button>
    </div>
  )
}

export default Button
