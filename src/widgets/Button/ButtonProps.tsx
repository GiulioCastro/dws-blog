import { borderTypes, colors } from "@/themes";
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
  small: "8px",
  large: "12px",
} as const

const Button = styled.button<{ size: keyof typeof buttonPadding }>`
  padding-top: ${props => buttonPadding[props.size]};
  padding-bottom: ${props => buttonPadding[props.size]};
  padding-left: 16px;
  padding-right: 16px;
  border: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const buttonVariants = {
  text: Button,
  contained: styled(Button) <{ border: keyof typeof borderTypes, buttonTheme: keyof typeof buttonThemes }>`
    border-radius: ${props => borderTypes[props.border]};
    background-color: ${props => buttonThemes[props.buttonTheme].button.default};
    &:hover {
      background-color: ${props => buttonThemes[props.buttonTheme].button.hover};
    }
  `,
  outlined: styled(Button) <{ border: keyof typeof borderTypes, buttonTheme: keyof typeof buttonThemes }>`
    border-radius: ${props => borderTypes[props.border]};
    border: 2px solid ${props => buttonThemes[props.buttonTheme].button.default};
    &:hover {
      border: 2px solid ${props => buttonThemes[props.buttonTheme].button.hover};
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
}