import { borderTypes, colors, spacing, strokeSizes } from "@/themes";
import { addAlpha } from "@/utils";
import styled from "styled-components";

export const filterTypes = {
  category: "Category",
  author: "Author",
}

export const DropdownWrapper = styled.div`{
  position: relative;
  display: inline-block;
`

export const DropdownBtn = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.neutral.lightest};
  color: ${colors.secondary.medium};
  padding: ${spacing.small}px ${spacing.medium}px;
  border-radius: ${borderTypes.pill}px;
  border: ${strokeSizes.xThin}px solid ${colors.secondary.medium};
  &:hover {
    background-color: ${addAlpha(colors.secondary.medium, 0.05)};
  }
`

export const DropdownContent = styled.div<{ $show: boolean }>`
  display: none;
  padding: ${spacing.medium}px;
  border-radius: ${borderTypes.rounded}px;
  position: absolute;
  background-color: ${colors.neutral.lightest};
  min-width: 314px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);
  z-index: 1;
  ${({ $show = false }) => $show && 'display: flex;'}
  flex-direction: column;
`
export const DropdownItem = styled.button<{}>`
  background-color: ${colors.neutral.lightest};
  border: 0;
  cursor: pointer;
  margin-top: ${spacing.xSmall}px;
  color: ${colors.neutral.darkest};
  &:hover {
    color: ${colors.secondary.medium};
    background-color: ${addAlpha(colors.secondary.medium, 0.05)};
  }
  &:first-child {
    margin-top: 0px;
  }
`

export interface DropdownFilterProps {
  readonly filterType: keyof typeof filterTypes;
}
