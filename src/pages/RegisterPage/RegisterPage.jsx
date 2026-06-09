import { Link } from "react-router"

import {
  RegisterBlock,
  RegisterButton,
  RegisterContainer,
  RegisterForm,
  RegisterFormGroup,
  RegisterInput,
  RegisterModal,
  RegisterTitle,
  RegisterWrapper,
} from "./RegisterPage.styled"

export function RegisterPage() {
  return (
  <RegisterWrapper>
    <RegisterContainer>
      <RegisterModal>
        <RegisterBlock>
          <RegisterTitle>Регистрация</RegisterTitle>

          <RegisterForm>
            <RegisterInput type="text" name="first-name" placeholder="Имя" />
            <RegisterInput type="text" name="login" placeholder="Эл. почта" />
            <RegisterInput type="password" name="password" placeholder="Пароль" />

            <RegisterButton type="button">
              Зарегистрироваться
            </RegisterButton>

            <RegisterFormGroup>
              <p>
                Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
              </p>
            </RegisterFormGroup>
            
          </RegisterForm>
        </RegisterBlock>
      </RegisterModal>
    </RegisterContainer>
  </RegisterWrapper>
)
}