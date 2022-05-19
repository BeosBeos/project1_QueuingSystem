import React from "react";
import { Outlet } from "react-router";
import Calendar1 from "../../../Assets/Calendar1";
import Calendar2 from "../../../Assets/Calendar2";
import Wait from "../../../Assets/Wait";
import Passing from "../../../Assets/Passing";

import "./dashboard.scss";
import Tivi from "../../../Assets/Tivi";
import Persent90 from "../../../Assets/Persent90";
import Service from "../../../Assets/Service";
import Persent76 from "../../../Assets/Persent76";
import Persent86 from "../../../Assets/Persent86";
import Series from "../../../Assets/Series";

const Dashboard: React.FC = () => {
  return (
    <div className="app__layout-dashboard">
      <div className="bigcol1">
        <div className="app__layout-dashboard__title1">Dashboard</div>
        <div className="app__layout-dashboard__title2">Biều đồ cấp số</div>
        <div className="row1">
          <div className="col1">
            <div className="logo1">
              <Calendar1 />
            </div>
            <div className="assigned">Số thứ tự đã cấp</div>
            <div className="number1">4.221</div>
            <div className="box1">
              <div className="box__persent1">32,41%</div>
            </div>
          </div>
          <div className="col2">
            <div className="logo2">
              <Calendar2 />
            </div>
            <div className="used">Số thứ tự đã sử dụng</div>
            <div className="number2">3.721</div>
            <div className="box2">
              <div className="box__persent2">32,41%</div>
            </div>
          </div>
          <div className="col3">
            <div className="logo3">
              <Wait />
            </div>
            <div className="waiting">Sô thứ tự đang chờ</div>
            <div className="number3">468</div>
            <div className="box3">
              <div className="box__persent3">56,41%</div>
            </div>
          </div>
          <div className="col4">
            <div className="logo4">
              <Passing />
            </div>
            <div className="pass">Số thứ tự đã bỏ qua</div>
            <div className="number4">32</div>
            <div className="box4">
              <div className="box__persent4">22,41%</div>
            </div>
          </div>
        </div>
        <div className="row2"></div>
      </div>

      <div className="bigcol2">
        <div className="app__layout-dashboard__title3">Tổng quan</div>
        <div className="row__right">
          <div className="row__right__top">
            <div className="row__right__top__1">
              <div className="persen90">
                <Persent90 />
              </div>
              <div className="number__right__1">4.221</div>
              <div className="number__right__2">3.799</div>
              <div className="number__right__3">422</div>
              <div className="text__right__1">Thiết bị</div>
              <div className="tivi__right">
                <Tivi />
              </div>
              <div className="text__right__2">Đang hoạt động</div>
              <div className="text__right__3">Ngưng hoạt động</div>
            </div>

            <div className="row__right__top__2">
              <div className="persen76">
                <Persent76 />
              </div>
              <div className="number__right__1">276</div>
              <div className="number__right__2">210</div>
              <div className="number__right__3">422</div>
              <div className="text__right__1">Dịch vụ</div>
              <div className="service__right">
                <Service />
              </div>
              <div className="text__right__2">Đang hoạt động</div>
              <div className="text__right__3">Ngưng hoạt động</div>
            </div>

            <div className="row__right__top__3">
              <div className="persen86">
                <Persent86 />
              </div>
              <div className="number__right__1">4.221</div>
              <div className="number__right__2">3.721</div>
              <div className="number__right__3">486</div>
              <div className="number__right__4">32</div>
              <div className="text__right__1">Cấp số</div>
              <div className="series__right">
                <Series />
              </div>
              <div className="text__right__2">Đã sử dụng</div>
              <div className="text__right__3">Đang chờ</div>
              <div className="text__right__4">Bỏ qua</div>
            </div>
          </div>

          <div className="row__right__bot">
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
