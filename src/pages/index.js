import styles from '@/styles/Home.module.css'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import Input from '@/components/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'
import Ask from '@/components/Ask'

export default function Home() {
  return (
      <div className={styles.login}>
        <Logo/>
        
        <Input
          icon={
            <FontAwesomeIcon icon={faEnvelope} />
          }
          type={'text'}
          placeholder='E-mail'
        />
        
        <Input
          icon={
            <FontAwesomeIcon icon={faLock} />
          }
          type={'password'}
          placeholder='Senha'
        />

        <Button
          text='Login'
        />


        <Ask 
          pergunta="Não possui uma conta?"
          resposta="Faça seu cadastro agora!"
          link="/cadastro"
        />
      </div>
  )
}
