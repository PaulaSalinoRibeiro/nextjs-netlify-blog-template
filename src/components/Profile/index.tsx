import Image from 'next/image'
import { SocialList } from '../SocialList'

import styles from './styles.module.css'

export default function Profile() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/profile.png"
        alt='imagem de perfil'
        width={118}
        height={118}
        className={styles.imageProfile}
      />
      <p className={styles.title}>
        Paula Ribeiro
      </p>
      <p className={styles.subtitle}>
        Software Enginner
      </p>
      <p className={styles.description}>
        Entusiasta em aprender e compartilhar conhecimento sobre o mundo da tecnologia
      </p>
      <div>
        <SocialList />
      </div>
    </div>
  )
}