
import { colors, iconSizes } from '@/themes';
import { FormInput, FormInputButton, FormInputWrapper } from '..'
import { Container } from './TopbarProps'
import logo from '@/assets/logo.png'
import { MdOutlineSearch } from "react-icons/md";

export default function Topbar() {
  return (
    <Container>
      <a href="https://www.dentsu.com/br/" target="_blank">
        <img src={logo} height={32} alt="dws logo" />
      </a>
      <FormInputWrapper width="500px">
        <FormInput $border="pill" placeholder="Search" />
        <FormInputButton>
          <MdOutlineSearch size={iconSizes.medium} color={colors.neutral.lightest} />
        </FormInputButton>
      </FormInputWrapper>
    </Container>
  )
}
