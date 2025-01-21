import { borderTypes, colors, spacing } from "@/themes";
import { Post } from "@/types";
import styled from "styled-components";

export interface BlogPostProps {
  readonly post: Post
  readonly handleClick: () => void
}

export const Card = styled.div<{ $isPressed: boolean }>`
  background-color: ${colors.primaryWhite};
  border-radius: ${borderTypes.rounded}px;
  height: 425px;
  overflow: hidden;
  cursor: pointer;
  opacity: ${({ $isPressed }) => $isPressed ? 0.8 : 1};
`

export const CardHeader = styled.div`
  height: 196px;  
`

export const CardImage = styled.img`
  object-fit: cover;
  height: 196px;
  width: 100%;
`

export const CardBody = styled.div`
  padding-left: ${spacing.medium}px;
  padding-right: ${spacing.medium}px;
  padding-top: ${spacing.medium}px;
  border: 1px solid ${colors.neutral.lightest};
  border-bottom: 0;
`

export const CardFooter = styled.div`
  padding-left: ${spacing.medium}px;
  padding-right: ${spacing.medium}px;
  padding-bottom: ${spacing.medium}px;
  border: 1px solid ${colors.neutral.lightest};
  border-top: 0;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 0;
`

export const Tag = styled.div`
  background-color: ${colors.neutral.lightest};
  padding-top: ${spacing.xSmall}px;
  padding-bottom: ${spacing.xSmall}px;
  padding-left: ${spacing.small}px;
  padding-right: ${spacing.small}px;
  border-radius: ${borderTypes.pill}px;
  margin-right: ${spacing.xSmall}px;
  margin-top: ${spacing.medium}px;
`

export const BulletPoint = styled.span`
  &::before {
    content: '•';
    color: red;
  }
`