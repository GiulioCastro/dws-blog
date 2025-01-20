import { borderTypes, colors, spacing } from "@/themes";
import { IconType } from "react-icons";
import styled from "styled-components";

export const buttonThemes = {
  secondary: {
    button: {
      default: colors.secondary.medium,
      hover: colors.secondary.dark,
    },
    text: {
      default: colors.neutral.lightest,
      hover: colors.neutral.lightest,
    }
  },
  accent1: {
    button: {
      default: colors.accent1.medium,
      hover: colors.accent1.dark,
    },
    text: {
      default: colors.neutral.lightest,
      hover: colors.neutral.lightest,
    }
  }
} as const

const buttonPadding = {
  small: spacing.xSmall,
  large: spacing.small,
} as const

const Button = styled.button<{ $isPressed: boolean, $size: keyof typeof buttonPadding }>`
  opacity: ${({ $isPressed }) => $isPressed ? 0.8 : 1};
  padding-top: ${({ $size }) => buttonPadding[$size]}px;
  padding-bottom: ${({ $size }) => buttonPadding[$size]}px;
  padding-left: ${spacing.medium}px;
  padding-right: ${spacing.medium}px;
  border: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
`;

export const buttonVariants = {
  text: Button,
  contained: styled(Button) <{ $border: keyof typeof borderTypes, $theme: keyof typeof buttonThemes }>`
    border-radius: ${props => borderTypes[props.$border]}px;
    background-color: ${props => buttonThemes[props.$theme].button.default};
    &:hover {
      background-color: ${props => buttonThemes[props.$theme].button.hover};
    }
  `,
  outlined: styled(Button) <{ $border: keyof typeof borderTypes, $theme: keyof typeof buttonThemes }>`
    border-radius: ${props => borderTypes[props.$border]}px;
    border: 1px solid ${props => buttonThemes[props.$theme].button.default};
    &:hover {
      border: 1px solid ${props => buttonThemes[props.$theme].button.hover};
    }
  `,
} as const

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  readonly text?: string
  readonly theme?: keyof typeof buttonThemes
  readonly size?: keyof typeof buttonPadding
  readonly variant?: keyof typeof buttonVariants
  readonly border?: keyof typeof borderTypes
  readonly LeftIcon?: IconType
  readonly RightIcon?: IconType
  readonly handlePress?: React.MouseEventHandler<HTMLButtonElement>
}