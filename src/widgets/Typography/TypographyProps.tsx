import { colors } from "@/themes";
import styled from "styled-components";

export const typographyVariants = {
  H1: styled.h1<{ color?: string }>`
  font-size: 3.5em;
    line-height: 130%;
    font-weight: 700;
    color: ${props => props.color || colors.neutral.darkest};
  `,
  H2: styled.h2<{ color?: string }>`
    font-size: 2.25em;
    line-height: 130%;
    font-weight: 700;
    color: ${props => props.color || colors.neutral.darkest};
  `,
  H3: styled.h3<{ color?: string }>`
    font-size: 1.25em;
    line-height: 130%;
    font-weight: 700;
    color: ${props => props.color || colors.neutral.darkest};
  `,
  Body: styled.p<{ color?: string }>`
    font-size: 14px;
    line-height: 150%;
    font-weight: 400;
    margin: 0;
    color: ${props => props.color || colors.neutral.darkest};
  `,
  BodyLg: styled.p<{ color?: string }>`
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
    margin: 0;
    color: ${props => props.color || colors.neutral.darkest};
  `,
  BodyLgBold: styled.p<{ color?: string }>`
    font-size: 16px;
    line-height: 150%;
    font-weight: 600;
    margin: 0;
    color: ${props => props.color || colors.neutral.darkest};
  `,
  Caption: styled.p<{ color?: string }>`
    font-size: 12px;
    line-height: 130%;
    font-weight: 400;
    margin: 0;
    color: ${props => props.color || colors.neutral.darkest};
  `,
} as const

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  readonly color?: string
  readonly variant: keyof typeof typographyVariants
}