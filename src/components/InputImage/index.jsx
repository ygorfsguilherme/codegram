import React, { useRef } from 'react'
import styles from './InputImage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faCamera} from '@fortawesome/free-solid-svg-icons'

function InputImage() {
    const inputImage = useRef(null)

    function openFile(){
        inputImage.current.click()
    }
  return (
    <div className={styles.container}>
        <label htmlFor='image'>
            <FontAwesomeIcon className={styles.image} icon={faUser} />
        </label>

        <input ref={inputImage} id='image' type="file" />

        <span onClick={openFile}>
            <FontAwesomeIcon icon={faCamera} />
        </span>

    </div>
  )
}

export default InputImage