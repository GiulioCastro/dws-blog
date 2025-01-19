import { TypographyProps, typographyVariants } from "./TypographyProps";

export function Typography({
	children,
	color,
	variant,
	...props
}: TypographyProps) {
	const TypographyComponent = typographyVariants[variant]
	return (
		<TypographyComponent color={color} {...props}>
			{children}
		</TypographyComponent>
	)
}