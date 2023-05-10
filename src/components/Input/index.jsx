import React from 'react'
import styles from './Input.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Input() {
  return (
    <div className={styles.input_container}>
        <label htmlFor="">
            <FontAwesomeIcon icon={faEnvelope} />
        </label>
        <input 
            type="text"
            placeholder='E-mail'
        />
    </div>
  )
}

export default Input