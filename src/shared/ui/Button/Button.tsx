import clsx from "clsx";
import styles from "./Button.module.css";

interface Props {
	variant: "primary" | "deleteButton";
	children: string;
	style?: React.CSSProperties;
	type?: "button" | "reset" | "submit";
	disabled?: boolean;
	onClick?: () => void;
}

const Button = ({
	children,
	variant,
	style,
	type = "button",
	disabled = false,
	onClick,
}: Props) => {
	return (
		<button
			disabled={disabled}
			style={style}
			className={clsx(styles[variant])}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
