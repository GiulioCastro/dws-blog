import styled, { css } from 'styled-components'

interface TextProps {
  $color?: string;
  $noWrap?: boolean;
  $numOfLines?: number;
}

const textStyles = css<TextProps>`
  margin: 0;
  color: ${({ $color = "inherit" }) => $color};
  ${({ $noWrap = false, $numOfLines = 1 }) => $noWrap && `
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${$numOfLines};
    overflow: hidden;
    text-overflow: ellipsis; 
  `}
`

export const typographyVariants = {
  H1: styled.h1<TextProps>`
    font-size: 56px;
    line-height: 130%;
    font-weight: 700;
    ${textStyles}
  `,
  H2: styled.h2<TextProps>`
    font-size: 36px;
    line-height: 130%;
    font-weight: 700;
    ${textStyles}
  `,
  H3: styled.h3<TextProps>`
    font-size: 20px;
    line-height: 130%;
    font-weight: 700;
    ${textStyles}
  `,
  Body: styled.p<TextProps>`
    font-size: 14px;
    line-height: 150%;
    font-weight: 400;
    ${textStyles}
  `,
  BodyBold: styled.p<TextProps>`
    font-size: 14px;
    line-height: 150%;
    font-weight: 600;
    ${textStyles}
  `,
  BodyLg: styled.p<TextProps>`
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
    ${textStyles}
  `,
  BodyLgBold: styled.p<TextProps>`
    font-size: 16px;
    line-height: 150%;
    font-weight: 600;
    ${textStyles}
  `,
  Caption: styled.p<TextProps>`
    font-size: 12px;
    line-height: 130%;
    font-weight: 400;
    ${textStyles}
  `,
  CaptionBold: styled.p<TextProps>`
    font-size: 12px;
    line-height: 130%;
    font-weight: 600;
    ${textStyles}
  `,
} as const

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  readonly $color?: string;
  readonly $noWrap?: boolean;
  readonly $numOfLines?: number;
  readonly variant?: keyof typeof typographyVariants
}