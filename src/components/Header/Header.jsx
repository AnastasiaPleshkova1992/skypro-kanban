import { useState } from "react"
import { Link } from "react-router"

import { Container } from "../../shared.styled"
import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  HeaderUser,
  HeaderPopUserSet,
} from './Header.styled'

export function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  return (
    <HeaderWrapper>
        <Container>
          <HeaderBlock>
            <HeaderLogo className="_show _light">
              <a href="" target="_self"><img src="/images/logo.png" alt="logo" /></a>
            </HeaderLogo>
            <HeaderLogo className="_dark">
              <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo" /></a>
            </HeaderLogo>
            <HeaderNav>
              <HeaderButton className="_hover01" id="btnMainNew">
                <Link to="/add-card">Создать новую задачу</Link>
              </HeaderButton>
              <HeaderUser 
                href="#" 
                className="header__user _hover02"
                onClick={(event) => {
                  event.preventDefault()
                  setIsUserMenuOpen(!isUserMenuOpen)
                }}
              >Ivan Ivanov</HeaderUser>
              <HeaderPopUserSet className="pop-user-set" id="user-set-target" style={{ display: isUserMenuOpen ? 'block': 'none'}}>
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <Link to="/exit">Выйти</Link>
                </button>
              </HeaderPopUserSet>
            </HeaderNav>					
          </HeaderBlock>
        </Container>
      </HeaderWrapper>
  )
}