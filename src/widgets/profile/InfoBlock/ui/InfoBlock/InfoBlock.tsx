import InfoHeader from "../InfoHeader/InfoHeader";
import InfoText from "../InfoText/InfoText";
import styles from "./InfoBlock.module.css";

interface Props {
	description?: string;
}

const InfoBlock = ({ description }: Props) => {
	return (
		<div className={styles.wrapper}>
			<InfoHeader />
			<InfoText description={description} />
		</div>
	);
};

export default InfoBlock;
