import React from 'react'
import styles from './Input.module.css'

function Input({
  icon,
  placeholder,
  type
}) {
  return (
    <div className={styles.input_container}>
        <label htmlFor="">
            {icon}
        </label>
        <input 
            type={type}
            placeholder={placeholder}
        />
    </div>
  )
}

export default Input