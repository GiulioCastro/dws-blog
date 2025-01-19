import styled from "styled-components";

export * from './Button/Button'
export * from './Typography/Typography'
export * from './Topbar/Topbar'

export const PageContainer = styled.div`
  width: "100%"
  background-color: transparent;
  padding-left: 56px;
  padding-right: 56px;
  @media (max-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`

export const Row = styled.div`
	display: flex;
	flex-direction: row;
`

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
  "auto": "auto"
}

export const Col = styled.div<{
  xs?: keyof typeof colWidth,
  sm?: keyof typeof colWidth,
  md?: keyof typeof colWidth,
  lg?: keyof typeof colWidth,
  xl?: keyof typeof colWidth,
  xxl?: keyof typeof colWidth,
}>`
	@media (max-width: 576px) {
		width: ${({ xs }) => xs ? colWidth[xs] : "auto"};
	}
	@media (min-width: 576px) {
		width: ${({ sm }) => sm ? colWidth[sm] : "auto"};
	}
	@media (min-width: 768px) {
		width: ${({ md }) => md ? colWidth[md] : "auto"};
	}
	@media (min-width: 992px) {
		width: ${({ lg }) => lg ? colWidth[lg] : "auto"};
	}
	@media (min-width: 1200px) {
		width: ${({ xl }) => xl ? colWidth[xl] : "auto"};
	}
	@media (min-width: 1400px) {
		width: ${({ xxl }) => xxl ? colWidth[xxl] : "auto"};
	}
`