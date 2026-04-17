import {
	useController,
	type Control,
	type FieldValues,
	type RegisterOptions,
	type Path,
} from "react-hook-form";
import styles from "./FormField.module.css";
import clsx from "clsx";
import { ErrorMessage } from "../ErrorMessage";


interface FormFieldProps<T extends FieldValues> {
	name: Path<T>;
	rules?: RegisterOptions<T>;
	control: Control<T>;
	label?: string;
	className?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	render: (field: { value: any; onChange: (...event: any[]) => void; error: boolean;}) => React.ReactNode;
}

const FormField = <T extends FieldValues>({
	render,
	name,
	rules,
	control,
	label,
	className,
}: FormFieldProps<T>) => {
	const { field, fieldState } = useController({ name, control, rules });

	const content = (
		<>
			{render({
				...field,
				error: !!fieldState.error,
			})}
			<ErrorMessage error={fieldState.error} />
		</>
	);

	if (label) {
		return (
			<label htmlFor={name} className={clsx(styles.inputLabel, className)}>
				{label}
				{content}
			</label>
		);
	}

	return <>{content}</>;
};

export default FormField;
