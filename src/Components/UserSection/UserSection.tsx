import React, { useState } from "react";
import "./usersection.scss";
import Bell from "../../Assets/Bell";
import { useNavigate } from "react-router";

const imgUrl =
  "https://scontent.xx.fbcdn.net/v/t1.15752-9/280456204_850331862593722_6796225965863368502_n.jpg?stp=dst-jpg_p75x225&_nc_cat=111&ccb=1-6&_nc_sid=aee45a&_nc_ohc=wAYWEdu1YyMAX9vwFbn&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIV0EwsTF_9Ri_qsNv5_JOTIwvp1K-f8q2xHdIi8uB9XQ&oe=62A2F18E";
const notifications = [
  { user: "Mạnh Quang Thông", content: "12h30 ngày 31/2/2020" },
  { user: "Kiều Hải Sơn", content: "12h30 ngày 31/2/2020" },
  { user: "Chu Tiến Đạt", content: "12h30 ngày 31/2/2020" },
  { user: "Nguyễn Thị Thùy Dung", content: "12h30 ngày 31/2/2020" },
  { user: "Võ Thị Kim Liên", content: "12h30 ngày 31/2/2020" },
  { user: "Hoàng Nguyễn Quốc Huy", content: "12h30 ngày 31/2/2020" },
  { user: "Võ Thị Kim Liên", content: "12h30 ngày 31/2/2020" },
  { user: "Mạnh Quang Thông", content: "12h30 ngày 31/2/2020" },
  { user: "Mạnh Quang Thông", content: "12h30 ngày 31/2/2020" },
];

const UserSection: React.FC = () => {
  const [notificationExpand, setNotificationExpand] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="app__user-section">
      <div
        className={`notification-bell ${notificationExpand && `active`}`}
        onClick={() => setNotificationExpand((prev) => !prev)}
      >
        <Bell />
        {notificationExpand && (
          <div className="notification-container">
            <div className="notification-container__header">Thông báo</div>
            <div className="notification-container__scroll-container">
              {notifications.map((item) => {
                return (
                  <div className="notification-item">
                    <div className="notification-item__title">
                     { `Người dùng: ${item.user}`}
                    </div>
                    <div className="notification-item__content">
                       {`Thời gian nhận số: ${item.content}`}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="avatar">
        <img src={imgUrl} alt="" onClick={() => navigate("user-info")}/>
      </div>
      <div className="hello-user">
        <span className="hello">Xin chào</span>
        <span className="user-name">Mạnh Quang Thông</span>
      </div>
    </div>
  );
};

export default UserSection;
