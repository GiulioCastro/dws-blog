import { TypographyProps, typographyVariants } from "./TypographyProps";

export function Typography({
	children,
	variant = "Body",
	...props
}: TypographyProps) {
	const TypographyComponent = typographyVariants[variant]
	return (
		<TypographyComponent {...props}>
			{children}
		</TypographyComponent>
	)
}