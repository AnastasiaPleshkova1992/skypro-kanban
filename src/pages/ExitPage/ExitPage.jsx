import { useNavigate } from "react-router";

import {
  ExitBlock,
  ExitButtonGroup,
  ExitButtonNo,
  ExitButtonYes,
  ExitContainer,
  ExitTitle,
  ExitWrapper,
} from "./ExitPage.styled"

export function ExitPage({ setIsAuth }) {
  const navigate = useNavigate()
  const handleLogout = () => {
    setIsAuth(false)
    navigate("/login")
  }
  const handleCancel = () => {
    navigate("/")
  }
  return (
    <ExitWrapper>
      <ExitContainer>
        <ExitBlock>
          <ExitTitle>Выйти из аккаунта?</ExitTitle>

          <ExitButtonGroup>
            <ExitButtonYes type="button" onClick={handleLogout}>
              Да, выйти
            </ExitButtonYes>

            <ExitButtonNo type="button" onClick={handleCancel}>
              Нет, остаться
            </ExitButtonNo>
          </ExitButtonGroup>
        </ExitBlock>
      </ExitContainer>
    </ExitWrapper>
  )
}
