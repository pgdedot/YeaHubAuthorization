import clsx from "clsx";
import styles from "./DropImageZone.module.css";
import galleryImg from "@/assets/Gallery.png";
import { useDragAndDrop } from "@/shared/helpers/useDragAndDrop";

interface Props {
	onChange: (file: File) => void;
	fileName?: string | null;
}

const DropImageZone = ({ onChange, fileName }: Props) => {
	const { onDrop, onDragOver } = useDragAndDrop(onChange);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) onChange(file);
	};

	return (
		<label
			htmlFor="image"
			className={styles.dropZone}
			onDragOver={onDragOver}
			onDrop={onDrop}
		>
			<img src={galleryImg} alt="uploadImg" />
			<div className={styles.dropZoneHint}>
				<p className={clsx(styles.dropZoneText, styles.dropZoneTextAccent)}>
					Кликни для изменения
				</p>
				<p className={styles.dropZoneText}>или перетащи сюда фотографию</p>
			</div>
			<p className={styles.dropZoneFormats}>JPG,PNG,JPEG (не более 5мб)</p>
			{fileName && <p className={styles.fileName}>{fileName}</p>}
			<input
				onChange={handleChange}
				type="file"
				name="image"
				id="image"
				accept="image/jpeg, image/png"
				className={styles.hiddenInput}
			/>
		</label>
	);
};

export default DropImageZone;
