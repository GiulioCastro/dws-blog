import { createSearchParams, useNavigate } from "react-router";
import { colors, iconSizes } from '@/themes';
import { FormInput, FormInputButton, FormInputWrapper, SearchButton } from '@/widgets'
import { Container } from './TopbarProps'
import logo from '@/assets/logo.png'
import { MdOutlineSearch } from "react-icons/md";
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { useCallback, useContext, useState } from "react";
import { FiltersContext } from "@/views/posts/PostsProps";

export default function Topbar() {
  const filters = useContext(FiltersContext)
  const navigate = useNavigate();
  const isMobile = useMatchMedia("md");

  const [value, setValue] = useState("");

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(e.target.value)
  }

  const navigateToPosts = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return
    navigate({
      pathname: "/posts",
      search: `?${createSearchParams({ search: value })}`
    });
  }, [value])

  return (
    <Container>
      <a href="/posts">
        <img src={logo} height={40} alt="dws logo" />
      </a>
      {isMobile ? (
        <SearchButton>
          <MdOutlineSearch size={iconSizes.medium} color={colors.neutral.lightest} />
        </SearchButton>
      ) : (
        <form onSubmit={navigateToPosts}>
          <FormInputWrapper width="500px">
            <FormInput list="search" value={value} type="text" name="search" $border="pill" placeholder="Search" onChange={handleChangeValue} />
            <FormInputButton type="submit">
              <MdOutlineSearch size={iconSizes.medium} color={colors.neutral.lightest} />
            </FormInputButton>
            <datalist id="search">
              {filters?.categories.map(c => (
                <option label={c.name} value={c.name} />
              ))}
            </datalist>
          </FormInputWrapper>
        </form>
      )}
    </Container>
  )
}
