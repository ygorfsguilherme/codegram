import React from 'react'
import styles from './Ask.module.css'

function Ask({
    pergunta,
    resposta,
    link
}) {
  return (
    <div className={styles.ask_container}>
        <p>{pergunta}</p>
        <a href={link}>{resposta}</a>
    </div>
  )
}

export default Ask