//rafc - snippet

import React from 'react'
import classes from './MyInput.module.css'

export const MyInput = (props) => {
  //если неуправляемый компонент
  //export const MyInput = React.forwardRef((props, ref) => {
  return (
    <input className={classes.myInput} {...props} />
  )
}
