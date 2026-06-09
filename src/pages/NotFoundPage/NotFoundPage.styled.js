import styled from "styled-components"

import {
  LoginBlock,
  LoginButton,
  LoginContainer,
  LoginModal,
  LoginTitle,
  LoginWrapper,
} from "../LoginPage/LoginPage.styled"

export const NotFoundWrapper = LoginWrapper

export const NotFoundContainer = LoginContainer

export const NotFoundModal = LoginModal

export const NotFoundBlock = LoginBlock

export const NotFoundTitle = styled(LoginTitle)`
  color: #565eef;
  font-size: 48px;
  line-height: 1;
`

export const NotFoundText = styled.p`
  color: #000000;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 24px;
`

export const NotFoundButton = styled(LoginButton)`
  margin: 0 auto;
`