import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { P, type PProps } from "./p";

export type ButtonProps = TouchableOpacityProps;

export function Button({ children, ...props }: ButtonProps) {
	return (
		<TouchableOpacity activeOpacity={0.9} {...props}>
			{children}
		</TouchableOpacity>
	);
}

export type ButtonTitleProps = PProps;

export function ButtonTitle({ children, ...props }: ButtonTitleProps) {
	return <P {...props}>{children}</P>;
}
