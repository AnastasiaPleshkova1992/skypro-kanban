import { Link } from "react-router"

import {
  NotFoundBlock,
  NotFoundButton,
  NotFoundContainer,
  NotFoundModal,
  NotFoundText,
  NotFoundTitle,
  NotFoundWrapper,
} from "./NotFoundPage.styled"

export function NotFoundPage() {
  return (
  <NotFoundWrapper>
    <NotFoundContainer>
      <NotFoundModal>
        <NotFoundBlock>
          <NotFoundTitle>404</NotFoundTitle>

          <NotFoundText>
            Страница не найдена
          </NotFoundText>

          <Link to="/">
            <NotFoundButton type="button">
              Вернуться на главную
            </NotFoundButton>
          </Link>
        </NotFoundBlock>
      </NotFoundModal>
    </NotFoundContainer>
  </NotFoundWrapper>
)
}