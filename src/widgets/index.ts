import {
  avatarSizes,
  borderTypes,
  breakpoints,
  colors,
  spacing,
  strokeSizes,
} from "@/themes";
import styled from "styled-components";

export * from "./Button/Button";
export * from "./Typography/Typography";
export * from "./Topbar/Topbar";
export * from "./BlogPost/BlogPost";

export const Row = styled.div<{
  $gutter?: string;
}>`
  display: flex;
  flex-wrap: wrap;
  & > * {
    padding: ${({ $gutter = "0px" }) => $gutter};
  }
  margin: ${({ $gutter = "0px" }) => `-${$gutter}`};
`;

const colWidth = {
  "1": "8.33%",
  "2": "16.66%",
  "3": "25%",
  "4": "33.33%",
  "5": "41.66%",
  "6": "50%",
  "7": "58.33%",
  "8": "66.66%",
  "9": "75%",
  "10": "83.33%",
  "11": "91.66%",
  "12": "100%",
  auto: "auto",
  none: "none",
};

export const Col = styled.div<{
  $xs?: keyof typeof colWidth;
  $sm?: keyof typeof colWidth;
  $md?: keyof typeof colWidth;
  $lg?: keyof typeof colWidth;
  $xl?: keyof typeof colWidth;
  $xxl?: keyof typeof colWidth;
}>`
  height: auto;
  width: 100%;
  display: block;
  ${({ $xs }) =>
    $xs &&
    `
    ${
      $xs === "none"
        ? `
      @media (max-width: ${breakpoints.sm}px) {
        display: none;
      }
    `
        : `
      @media (min-width: ${breakpoints.xs}px) {
        width: ${colWidth[$xs]};
      }
    `
    }
  `}
  ${({ $sm }) =>
    $sm &&
    `
    ${
      $sm === "none"
        ? `
      @media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md}px) {
        display: none;
      }
    `
        : `
      @media (min-width: ${breakpoints.sm}px) {
        width: ${colWidth[$sm]};
      }
    `
    }
  `}
  ${({ $md }) =>
    $md &&
    `
    ${
      $md === "none"
        ? `
      @media (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg}px) {
        display: none;
      }
    `
        : `
      @media (min-width: ${breakpoints.md}px) {
        width: ${colWidth[$md]};
      }
    `
    }
  `}
  ${({ $lg }) =>
    $lg &&
    `
    ${
      $lg === "none"
        ? `
      @media (min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl}px) {
        display: none;
      }
    `
        : `
      @media (min-width: ${breakpoints.lg}px) {
        width: ${colWidth[$lg]};
      }
    `
    }
  `}
  ${({ $xl }) =>
    $xl &&
    `
    ${
      $xl === "none"
        ? `
      @media (min-width: ${breakpoints.xl}px) and (max-width: ${breakpoints.xxl}px) {
        display: none;
      }
    `
        : `
      @media (min-width: ${breakpoints.xl}px) {
        width: ${colWidth[$xl]};
      }
    `
    }
  `}
  ${({ $xxl }) =>
    $xxl &&
    `
    @media (min-width: ${breakpoints.xxl}px) {
      ${
        $xxl === "none"
          ? `
        display: none;
      `
          : `
        width: ${colWidth[$xxl]};
      `
      }
    }
  `}
`;

export const Avatar = styled.img<{ size?: keyof typeof avatarSizes }>`
  object-fit: cover;
  height: ${({ size = "medium" }) => avatarSizes[size]}px;
  width: ${({ size = "medium" }) => avatarSizes[size]}px;
  border-radius: ${borderTypes.circle}px;
`;

export const BlogThumbnail = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: ${borderTypes.rounded}px;
  margin-top: ${spacing.large}px;
  margin-bottom: ${spacing.large}px;
`;

export const PageContainer = styled.div`
  width: 100%;
  background-color: transparent;
  padding: ${spacing.xxLarge}px;
  @media (max-width: ${breakpoints.md}px) {
    padding: ${spacing.medium}px;
  }
`;

export const Divider = styled.div<{
  type?: "vertical" | "horizontal";
  color?: string;
  stroke?: number;
  inset?: number;
}>`
  background-color: ${({ color = colors.neutral.lightest }) => color};
  height: ${({ type = "horizontal", stroke = strokeSizes.xThin }) =>
    type === "vertical" ? "100%" : `${stroke}px`};
  width: ${({ type = "horizontal", stroke = strokeSizes.xThin }) =>
    type === "horizontal" ? "100%" : `${stroke}px`};
  margin-top: ${({ type = "horizontal", inset }) =>
    type === "vertical" ? "0px" : `${inset}px`};
  margin-bottom: ${({ type = "horizontal", inset }) =>
    type === "vertical" ? "0px" : `${inset}px`};
  margin-left: ${({ type = "horizontal", inset }) =>
    type === "horizontal" ? "0px" : `${inset}px`};
  margin-right: ${({ type = "horizontal", inset }) =>
    type === "horizontal" ? "0px" : `${inset}px`};
`;

export const FormInputWrapper = styled.div<{
  width?: string;
}>`
  height: 56px;
  width: ${({ width = "200px" }) => width};
  position: relative;
  display: inline-block;
`;

export const FormInput = styled.input<{
  $border?: keyof typeof borderTypes;
}>`
  height: 100%;
  width: 100%;
  background-color: ${colors.primaryWhite};
  border-radius: ${({ $border = "square" }) => borderTypes[$border]}px;
  border: ${strokeSizes.xThin}px solid ${colors.neutral.extraLight};
  color: ${colors.neutral.extraDark};
  &:hover {
    border: ${strokeSizes.xThin}px solid ${colors.accent1.medium};
  }
  &:focus {
    outline: none;
    border: ${strokeSizes.xThin}px solid ${colors.accent1.medium};
  }
  &::placeholder {
    color: ${colors.neutral.extraDark};
  }
  padding-left: ${spacing.medium}px;
  padding-right: ${spacing.xLarge}px;
`;

export const FormInputButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  border-radius: ${borderTypes.circle}px;
  background-color: ${colors.neutral.darkest};
  height: 40px;
  width: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
