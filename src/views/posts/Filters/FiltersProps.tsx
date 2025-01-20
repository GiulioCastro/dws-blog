import { borderTypes, colors, spacing, strokeSizes } from "@/themes";
import { addAlpha } from "@/utils";
import styled from "styled-components";

export const Card = styled.div`
  background-color: ${colors.primaryWhite};
  border: ${strokeSizes.xThin}px solid ${colors.neutral.lightest};
  border-radius: ${borderTypes.rounded}px;
  padding: ${spacing.medium}px;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const FilterItem = styled.button<{ selected: boolean }>`
  padding-top: ${spacing.xSmall}px;
  padding-bottom: ${spacing.xSmall}px;
  padding-left: ${spacing.xxSmall}px;
  padding-right: ${spacing.xxSmall}px;
  border: ${({ selected = false }) => `${strokeSizes.xThin}px solid ${selected ? colors.accent1.dark : "transparent"}`};
  border-bottom: ${({ selected = false }) => !selected && `${strokeSizes.xThin}px solid ${colors.neutral.lightest}`};
  border-radius: ${borderTypes.smooth}px;
  color: ${({ selected = false }) => selected ? colors.accent1.dark : colors.neutral.darkest};
  &:hover {
    color: ${colors.accent1.dark};
  }
  background-color: ${({ selected = false }) => selected ? addAlpha(colors.accent1.light, 0.05) : colors.primaryWhite};
  cursor: pointer;
  text-align: left;
  margin-top: ${spacing.xxSmall}px;
  &:first-child {
    margin-top: 0px;
  }
`