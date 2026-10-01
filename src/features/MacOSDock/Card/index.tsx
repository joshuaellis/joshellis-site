import styles from '../MacOSDock.module.css'

interface CardProps {
  src: string
}

export const Card = ({ src }: CardProps) => (
  <div className={styles.card}>
    <img className={styles.cardGlow} src={src} alt="" />
    <img className={styles.cardImage} src={src} alt="" />
  </div>
)
