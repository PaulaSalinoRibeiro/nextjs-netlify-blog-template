import { SocialList } from '../SocialList'

import styles from './styles.module.css'

export type Props = {
  path: string;
}

export default function Profile({path}: Props) {
  return (
    <div className={styles.container}>
      <img
        src={path}
        alt='imagem de perfil'
        className={styles.imageProfile}
      />
      <p className={styles.title}>
        Paula Ribeiro
      </p>
      <p className={styles.subtitle}>
        Frontend Engineer
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