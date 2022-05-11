import React from 'react'
import { useNavigate } from 'react-router'
import Logo from '../../../Assets/Logo'
import Button from '../../Button/Button'
import Textbox from '../../Textbox/Textbox'
import "./editpasswordform.scss"

const EditPasswordForm: React.FC = () => {
  const navigate = useNavigate()
    return (
        <div className="edit-password-form">
        <div className="edit-password-form-top">
          <Logo />
        </div>
        <div className="edit-password-form-middle">
            <div className="label">Đặt lại mật khẩu mới</div>
          <Textbox label="Mật khẩu" isPassword />
          <Textbox label="Nhập lại mật khẩu" isPassword />
        </div>
        <div className="edit-password-form-bottom">
          <Button  text="Xác nhận" onClick={() => navigate("/login")}/>
        </div>
    
       
      </div>
      )
}

export default EditPasswordForm