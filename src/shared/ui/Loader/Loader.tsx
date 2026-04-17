import { createPortal } from "react-dom";
import styles from "./Loader.module.css";

interface Props {
	showLoader?: boolean;
}

const Loader = ({ showLoader = false }: Props) => {
	if (!showLoader) return null;

	return createPortal(
		<div className={styles.loaderWindow}>
			<span className={styles.loader}></span>
		</div>,
		document.body
	);
};

export default Loader;
