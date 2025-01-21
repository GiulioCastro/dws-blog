import { borderTypes, colors, spacing } from "@/themes";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SortByButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${spacing.xSmall}px;
  border: 0;
  border-radius: ${borderTypes.pill}px;
  background-color: transparent;
  color: ${colors.accent1.medium};
  p {
    color: ${colors.neutral.extraDark};
  }
  &:hover {
    background-color: ${colors.accent1.medium};
    color: ${colors.neutral.lightest};
  }
  &:hover p {
    color: ${colors.neutral.lightest};
  }
  cursor: pointer;
  text-align: left;
`