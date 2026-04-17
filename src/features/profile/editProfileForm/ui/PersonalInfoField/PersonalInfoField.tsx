import styles from "./PersonalInfoField.module.css";
import { useFormContext } from "react-hook-form";
import { SpecializationSelect } from "@/entities/specialization";
import { FormField } from "@/shared/ui/FormField";
import { Input } from "@/shared/ui/Input";

const PersonalInfoField = () => {
	const { control } = useFormContext();

	return (
		<div className={styles.personalInfoWrapper}>
			<div className={styles.textWrapper}>
				<h3 className={styles.textHeader}>Персональная информация</h3>
				<p className={styles.textDescription}>
					Поделитесь своими профилями в других соц. сетях
				</p>
			</div>
			<div className={styles.inputsWrapper}>
				<FormField
					name="username"
					label="Никнейм"
					control={control}
					render={({ value, onChange, error }) => (
						<Input value={value} onChange={onChange} error={error} size="320" />
					)}
				/>
				<SpecializationSelect />
				<FormField
					name="email"
					label="Email для связи"
					control={control}
					render={({ value, onChange }) => (
						<Input
							disabled={true}
							value={value}
							onChange={onChange}
							size="320"
						/>
					)}
				/>
				<FormField
					name="location"
					label="Локация"
					control={control}
					render={({ value, onChange, error }) => (
						<Input value={value} onChange={onChange} error={error} size="320" />
					)}
				/>
			</div>
		</div>
	);
};

export default PersonalInfoField;
