import { useState } from "react";
import { Typography } from "../Typography/Typography";
import { ButtonProps, buttonThemes, buttonVariants } from "./ButtonProps";
import { iconSizes, spacing } from "@/themes";

export function Button({
	text,
	size = "large",
	border = "rounded",
	theme = "secondary",
	variant = "contained",
	LeftIcon,
	RightIcon,
	...props
}: ButtonProps) {
	const [hover, setHover] = useState(false);

	const selectedTheme = buttonThemes[theme]
	const ButtonComponent = buttonVariants[variant]

	const handleMouseEnter = () => setHover(true)
	const handleMouseLeave = () => setHover(false)

	const textColor = hover ? selectedTheme.text.hover : selectedTheme.text.default

	return (
		<ButtonComponent
			size={size}
			border={border}
			buttonTheme={theme}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...props}
		>
			{!!LeftIcon && (
				<LeftIcon
					color={textColor}
					size={iconSizes.medium}
					style={{ marginRight: spacing.xSmall }}
				/>
			)}
			{!!text && (
				<Typography
					variant="BodyLgBold"
					color={textColor}
				>
					{text}
				</Typography>
			)}
			{!!RightIcon && (
				<RightIcon
					color={textColor}
					size={iconSizes.medium}
					style={{ marginLeft: spacing.xSmall }}
				/>
			)}
		</ButtonComponent>
	)
}