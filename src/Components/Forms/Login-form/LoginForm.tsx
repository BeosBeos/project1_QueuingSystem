import React from 'react'
import { useNavigate } from 'react-router'
import Logo from '../../../Assets/Logo'
import Button from '../../Button/Button'
import Textbox from '../../Textbox/Textbox'
import "./loginform.scss"

const LoginForm: React.FC= () => {
  const navigate = useNavigate()
  return (
    <div className="login-form">
    <div className="login-form-top">
      <Logo />
    </div>
    <div className="login-form-middle">
      <Textbox label="Tên đăng nhập *" />
      <Textbox label="Mật khẩu *" isPassword />
      <div className="forgot-password" onClick={() => navigate("/forgot-password")}>
        Quên mật khẩu?
      </div>
    </div>
    <div className="login-form-bottom">
      <Button  text="Đăng nhập" onClick={() => navigate("/dashboard")}/>
    </div>

   
  </div>
  )
}

export default LoginForm