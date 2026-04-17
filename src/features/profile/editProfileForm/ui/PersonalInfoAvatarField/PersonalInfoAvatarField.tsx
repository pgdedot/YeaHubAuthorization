import { useAppSelector } from "@/app/appStore";
import styles from "./PersonalInfoAvatarField.module.css";
import { AvatarImage } from "@/shared/ui/AvatarImage";
import { useController, useFormContext } from "react-hook-form";
import type { EditProfileFormValues } from "../../model/types/types";
import { useState } from "react";
import { processFile } from "@/shared/helpers/processFile";
import { DropImageZone } from "@/shared/ui/DropImageZone";
import { Button } from "@/shared/ui/Button";

const PersonalInfoAvatarField = () => {
	const [fileName, setFileName] = useState<string | null>(null);
	const { fullProfile } = useAppSelector((state) => state.profile);
	const { control } = useFormContext<Pick<EditProfileFormValues, "image">>();
	const { field } = useController({ name: "image", control });
	const [preview, setPreview] = useState<string | null | undefined>(undefined);

	const handleChange = async (file: File) => {
		const base64 = await processFile(file);
		setFileName(file.name);
		setPreview(`data:image/jpeg;base64,${base64}`);
		field.onChange(base64);
	};

	const handleDeleteAvatar = () => {
		field.onChange(null);
		setPreview(null);
		setFileName("Сохраните изменения чтобы удалить фото");
	};

	const avatarSrc =
		preview === undefined ? fullProfile?.avatarUrl : (preview ?? undefined);

	return (
		<div className={styles.avatarFormWrapper}>
			<div className={styles.sectionInfo}>
				<h3 className={styles.sectionHeader}>Фото профиля</h3>
				<p className={styles.sectionDescription}>
					Поделитесь своими профилями в других соц. сетях
				</p>
			</div>
			<div className={styles.avatarWrapper}>
				<div className={styles.imageWrapper}>
					<AvatarImage src={avatarSrc} size={160} />
					<Button onClick={handleDeleteAvatar} variant="deleteButton">
						Удалить фото
					</Button>
				</div>
				<DropImageZone onChange={handleChange} fileName={fileName} />
			</div>
		</div>
	);
};

export default PersonalInfoAvatarField;
