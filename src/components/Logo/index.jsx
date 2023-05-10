import React from 'react'
import styles from './Logo.module.css'

function Logo() {
  return (
    <img
        src='/logo.png'
        alt='logo'
        className={styles.logo}
    />
  )
}

export default Logo