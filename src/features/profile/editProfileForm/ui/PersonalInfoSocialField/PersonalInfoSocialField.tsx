import styles from "./PersonalInfoSocialField.module.css";
import { socialNetworks } from "../../model/constants";
import { useFormContext } from "react-hook-form";
import type { EditProfileFormValues } from "../../model/types/types";
import { FormField } from "@/shared/ui/FormField";
import { Input } from "@/shared/ui/Input";


const PersonalInfoSocialField = () => {
	const { control } =
		useFormContext<Pick<EditProfileFormValues, "socialNetworks">>();
	return (
		<div className={styles.socialNetworkWrapper}>
			<div className={styles.textWrapper}>
				<h3 className={styles.textHeader}>Личные ссылки</h3>
				<p className={styles.textDescription}>
					Поделитесь своими профилями в других соц. сетях
				</p>
			</div>

			<div className={styles.socialNetworks}>
				{socialNetworks.map(({ code, title }, index) => (
					<FormField
						name={`socialNetworks.${index}`}
						className={styles.socialNetwork}
						label={title}
						control={control}
						key={code}
						render={({ value, onChange }) => (
							<Input
								size="320"
								value={value?.title ?? ""}
								onChange={(e) => e && onChange({ code, title: e.target.value })}
							/>
						)}
					/>
				))}
			</div>
		</div>
	);
};

export default PersonalInfoSocialField;
