import { useSelector } from "react-redux";
import React from "react";
import { RootState } from "../../../redux/store";
import Textbox from "../../Textbox/Textbox";
import "./userinfo.scss"
import { Camera } from "../../../Assets/Camera";
const imgUrl =
  "https://dothobattrang.vn/wp-content/uploads/2018/05/con-meo-hoang-vao-nha-la-diem-bao-gi-hen.jpg";

const UserInfo: React.FC = () => {
    const userInfo = useSelector((state : RootState) => state.user)
    return (
      <div className="app__layout-user-info">
        <div className="col">
          <div className="app__layout-user-info__avatar">
            <img src={imgUrl} alt="" />
            
            </div>
            <div className="app__layout-user__camera">
              <Camera />
          </div>
          <div className="app__layout-user-info__name">{userInfo.fullName}</div>
        </div>
        <div className="col-flex">
          <Textbox label="Tên người dùng" value={userInfo.fullName}/>
          <Textbox label="Số điện thoại:" value={userInfo.phoneNumber}/>
          <Textbox label="Email:" value={userInfo.email}/>
        </div>
        <div className="col-flex">
          <Textbox label="Tên đăng nhập" value={userInfo.userName}/>
          <Textbox label="Mật khẩu" value={userInfo.password}/>
          <Textbox label="Vai trò" value={`${userInfo.role === 0 ? `Admin` : `Contributor`}`}/>
        </div>
      </div>
    );
  };

export default UserInfo;