import BenefitCircle from '@/assets/check-circle.png'
import styles from './BenefitItem.module.css'

interface Props {
  text: string
}

const BenefitItem = ({text}: Props) => {
  return (
    <li className={styles.item}>
      <span>
        <img src={BenefitCircle} alt="CheckCircle" />
      </span>
      {text}
    </li>
  )
}

export default BenefitItem
