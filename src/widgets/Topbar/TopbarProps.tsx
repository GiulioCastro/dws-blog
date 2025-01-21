import { breakpoints, colors, spacing, strokeSizes } from "@/themes";
import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  border-bottom: ${strokeSizes.thin}px solid ${colors.neutral.lightest};
  padding-top: ${spacing.medium}px;
  padding-bottom: ${spacing.medium}px;
  padding-left: ${spacing.xxLarge}px;
  padding-right: ${spacing.xxLarge}px;
  @media (max-width: ${breakpoints.md}px) {
    padding-left: ${spacing.medium}px;
    padding-right: ${spacing.medium}px;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`