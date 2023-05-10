import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import Input from '@/components/Input'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className={styles.login}>
        <Logo/>
        
        <Input/>
        
        <Input/>

        <Button/>
      </div>
  )
}
