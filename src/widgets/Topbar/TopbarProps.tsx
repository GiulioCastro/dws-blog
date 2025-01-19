import { colors } from "@/themes";
import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  border-bottom: 2px solid ${colors.neutral.lightest};
  padding-left: 56px;
  padding-right: 56px;
  @media (max-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`