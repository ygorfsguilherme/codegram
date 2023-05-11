import React from 'react'
import styles from './Cadastro.module.css'
import Input from '@/components/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/Button'
import Ask from '@/components/Ask'
import InputImage from '@/components/InputImage'

function Cadastro() {
  return (
    <div className={styles.container}>

        <InputImage />
        
        <Input
            icon={
                <FontAwesomeIcon icon={faUser} />
            }
            placeholder='Nome Completo'
        />

        <Input
            icon={
                <FontAwesomeIcon icon={faEnvelope} />
            }
            placeholder='E-mail'
        />

        <Input
            icon={
                <FontAwesomeIcon icon={faLock} />
            }
            placeholder='Senha'
        />

        <Input
            icon={
                <FontAwesomeIcon icon={faLock} />
            }
            placeholder='Confirmar Senha'
        />

        <Button 
            text='Cadastrar'
        />

        <Ask
            pergunta='Já possui uma conta?'
            resposta='Faça seu login agora!'
            link='/'
        />
    </div>
  )
}

export default Cadastro