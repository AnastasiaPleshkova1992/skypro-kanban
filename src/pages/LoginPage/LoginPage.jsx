import { Link, useNavigate } from "react-router";

import {
  LoginBlock,
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginFormGroup,
  LoginInput,
  LoginModal,
  LoginTitle,
  LoginWrapper,
} from "./LoginPage.styled"

export function LoginPage({ setIsAuth }) {
  const navigate = useNavigate()
  const handleLogin = () => {
    setIsAuth(true)
    navigate("/")
  }
  return (
    <LoginWrapper>
      <LoginContainer>
          <LoginModal>
            <LoginBlock>
              <LoginTitle>Вход</LoginTitle>
              <LoginForm>
                <LoginInput type="text" name="login" id="formlogin" placeholder="Эл. почта" />
                <LoginInput type="password" name="password" placeholder="Пароль" />
                <LoginButton type="button" onClick={handleLogin}>
                  Войти
                </LoginButton>
                <LoginFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to="/register">Регистрируйтесь здесь</Link>
                </LoginFormGroup>
              </LoginForm>
            </LoginBlock>
          </LoginModal>
      </LoginContainer>
    </LoginWrapper>
  )
}
