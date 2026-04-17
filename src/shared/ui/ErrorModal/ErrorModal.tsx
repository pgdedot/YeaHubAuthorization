import { createPortal } from "react-dom";
import styles from "./ErrorModal.module.css";

interface Props {
	message: string;
	title?: string;
	onClose: () => void;
	isOpen: boolean;
}
const ErrorModal = ({ message, title = "Упс!", onClose, isOpen }: Props) => {
	if (!isOpen) return null;

	return createPortal(
		<div className={styles.toast}>
			<div className={styles.icon}>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
					<circle cx="10" cy="10" r="9" stroke="#ab3d3d" strokeWidth="1.5" />
					<path
						d="M7 7L13 13M13 7L7 13"
						stroke="#ab3d3d"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
				</svg>
			</div>
			<div className={styles.content}>
				<p className={styles.title}>{title}</p>
				<p className={styles.message}>{message}</p>
			</div>
			<button className={styles.close} onClick={onClose}>
				×
			</button>
		</div>,
		document.body
	);
};

export default ErrorModal;
