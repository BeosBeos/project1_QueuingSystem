import React from "react";
import Arrowright from "../../../Assets/Arrowright";
import "./device.scss";

const Device = () => {
  return (
    <div className="app__layout-device">
      <div className="device__text1">Thiết bị</div>
      <div className="arrow__right">
        <Arrowright />
      </div>
      <div className="device__text2">Danh sách thiết bị</div>
      <div className="device__title">Danh sách thiết bị</div>
      <div className="status">
        <div className="status1">Trạng thái hoạt động</div>
        <form action="form">
          <select className="status__form1" name="languages" id="lang">
            <option value="tatca">Tất cả</option>
            <option value="hoatdong">Hoạt động</option>
            <option value="ngunghoatdong">Ngưng hoạt động</option>
          </select>
        </form>
        <div className="status2">Trạng thái kết nối</div>
        <form action="form">
          <select className="status__form2" name="languages" id="lang">
            <option value="tatca">Tất cả</option>
            <option value="ketnoi">Kết Nối</option>
            <option value="matketnoi">Mất Kết Nối</option>
          </select>
        </form>
        <div className="keywords">Từ khóa</div>
        <input
          className="keywords__1"
          type="text"
          placeholder="Nhập từ khóa"
        ></input>
      </div>
      <div className="container">
        <div className="device_container-box">
          <div className="device__container-table">
            <table>
              <thead>
                <tr>
                  <th>Mã thiết bị</th>
                  <th>Tên thiết bị</th>
                  <th>Địa chỉ IP</th>
                  <th>Trạng thái hoạt động</th>
                  <th>Trạng thái kết nối</th>
                  <th>Dịch vụ sử dụng</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="device__container-table__white">
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>
                    Khám tim mạch, Khám mắt... <a href="">Xem thêm</a>
                  </td>
                  <td>
                    <a href="">Chi tiết</a>
                  </td>
                  <td>
                    <a href="">Cập nhật</a>
                  </td>
                </tr>

                <tr className="device__container-table__orange">
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>
                    Khám tim mạch, Khám mắt... <a href="">Xem thêm</a>
                  </td>
                  <td>
                    <a href="">Chi tiết</a>
                  </td>
                  <td>
                    <a href="">Cập nhật</a>
                  </td>
                </tr>

                <tr className="device__container-table__white">
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>
                    Khám tim mạch, Khám mắt... <a href="">Xem thêm</a>
                  </td>
                  <td>
                    <a href="">Chi tiết</a>
                  </td>
                  <td>
                    <a href="">Cập nhật</a>
                  </td>
                </tr>

                <tr className="device__container-table__orange">
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>
                    Khám tim mạch, Khám mắt... <a href="">Xem thêm</a>
                  </td>
                  <td>
                    <a href="">Chi tiết</a>
                  </td>
                  <td>
                    <a href="">Cập nhật</a>
                  </td>
                </tr>

                <tr className="device__container-table__white">
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>
                    Khám tim mạch, Khám mắt... <a href="">Xem thêm</a>
                  </td>
                  <td>
                    <a href="">Chi tiết</a>
                  </td>
                  <td>
                    <a href="">Cập nhật</a>
                  </td>
                </tr>

                <tr className="device__container-table__orange">
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>
                    Khám tim mạch, Khám mắt... <a href="">Xem thêm</a>
                  </td>
                  <td>
                    <a href="">Chi tiết</a>
                  </td>
                  <td>
                    <a href="">Cập nhật</a>
                  </td>
                </tr>

                <tr className="device__container-table__white">
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>
                    Khám tim mạch, Khám mắt... <a href="">Xem thêm</a>
                  </td>
                  <td>
                    <a href="">Chi tiết</a>
                  </td>
                  <td>
                    <a href="">Cập nhật</a>
                  </td>
                </tr>

                <tr className="device__container-table__orange">
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>
                    Khám tim mạch, Khám mắt... <a href="">Xem thêm</a>
                  </td>
                  <td>
                    <a href="">Chi tiết</a>
                  </td>
                  <td>
                    <a href="">Cập nhật</a>
                  </td>
                </tr>

                <tr className="device__container-table__white">
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>
                    Khám tim mạch, Khám mắt... <a href="">Xem thêm</a>
                  </td>
                  <td>
                    <a href="">Chi tiết</a>
                  </td>
                  <td>
                    <a href="">Cập nhật</a>
                  </td>
                </tr>

                <tr className="device__container-table__orange">
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>
                    Khám tim mạch, Khám mắt... <a href="">Xem thêm</a>
                  </td>
                  <td>
                    <a href="">Chi tiết</a>
                  </td>
                  <td>
                    <a href="">Cập nhật</a>
                  </td>
                </tr>

                <tr className="device__container-table__white">
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>191.168.1.10</td>
                  <td>Ngưng hoạt động</td>
                  <td>Mất kết nối</td>
                  <td>
                    Khám tim mạch, Khám mắt... <a href="">Xem thêm</a>
                  </td>
                  <td>
                    <a href="">Chi tiết</a>
                  </td>
                  <td>
                    <a href="">Cập nhật</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="add">
        <div className="add__logo">
          <div className="add__logo__plus">+</div>
        </div>
        <div className="add__device">Thêm thiết bị</div>
      </div>
    </div>
  );
};

export default Device;