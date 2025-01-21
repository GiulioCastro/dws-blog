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
	handlePress,
	...props
}: ButtonProps) {
	const [isHovered, setIsHovered] = useState(false);
	const [isPressed, setIsPressed] = useState(false);

	const selectedTheme = buttonThemes[theme]
	const ButtonComponent = buttonVariants[variant]

	const textColorVariant = variant === "contained" ? "text" : "button"
	const textColor = isHovered ? selectedTheme[textColorVariant].hover : selectedTheme[textColorVariant].default

	const handleMouseEnter = () => setIsHovered(true)
	const handleMouseLeave = () => setIsHovered(false)

	const handleMouseDown = () => setIsPressed(true);
	const handleMouseUp = () => setIsPressed(false);

	return (
		<ButtonComponent
			type="button"
			$isPressed={isPressed}
			$size={size}
			$border={border}
			$theme={theme}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onClick={handlePress}
			{...props}
		>
			{!!LeftIcon && (
				<LeftIcon
					color={textColor}
					size={iconSizes.xSmall}
					style={{ marginRight: spacing.xSmall }}
				/>
			)}
			{!!text && (
				<Typography
					variant="BodyLgBold"
					$color={textColor}
				>
					{text}
				</Typography>
			)}
			{!!RightIcon && (
				<RightIcon
					color={textColor}
					size={iconSizes.xSmall}
					style={{ marginLeft: spacing.xSmall }}
				/>
			)}
		</ButtonComponent>
	)
}