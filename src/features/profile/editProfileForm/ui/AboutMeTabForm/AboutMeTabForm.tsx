import { useFormContext } from "react-hook-form";
import styles from "./AboutMeTabForm.module.css";
import type { EditProfileFormValues } from "../../model/types/types";
import { Textarea } from "@/shared/ui/Textarea";
import { FormField } from "@/shared/ui/FormField";

const MAX_LENGTH = 1000;

const AboutMeTabForm = () => {
	const { control } = useFormContext<Pick<EditProfileFormValues, "aboutMe">>();

	return (
		<div className={styles.wrapper}>
			<div className={styles.textWrapper}>
				<p className={styles.formTextHeader}>О себе любимом(-ой)</p>
				<p className={styles.formDescription}>
					Расскажи о себе всему сообществу. Мы ценим человека не за его
					профессиональные качества, поэтому пиши всё чем хочешь поделиться
				</p>
			</div>
			<FormField
				control={control}
				name="aboutMe"
				render={({ value, onChange }) => (
					<Textarea value={value} onChange={onChange} maxLength={MAX_LENGTH} />
				)}
			/>
		</div>
	);
};

export default AboutMeTabForm;
