import type { FieldError } from "react-hook-form"
import styles from './ErrorMessage.module.css'

interface Props{
  error: FieldError | undefined
}

const ErrorMessage = ({error}: Props) => {
  if(!error) return null;
  return <span className={styles.error}>{error.message}</span>
}

export default ErrorMessage
