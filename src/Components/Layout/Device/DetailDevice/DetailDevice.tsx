import React from 'react';
import { useNavigate } from 'react-router';
import './detaildevice.scss';
import { ReactComponent as AddIc } from '../../../../Assets/add-square.svg';

const DetailDevice = () => {
  const navigate = useNavigate();
  return (
    <div className='detail-device'>
      <div className='title'>Quản lý thiết bị</div>
      <div className='container'>
        <div className='container__info-device'>Thông tin thiết bị</div>
        <div className='detail__col'>
          <div className='detail__col__left'>
            <div className='mathietbi'>Mã thiết bị:</div>
            <div className='tenthietbi'>Tên thiết bị:</div>
            <div className='diachiIp'>Địa chỉ IP:</div>
          </div>
          <div className='detail__col__right'>
            <div className='loaithietbi'>Loại thiết bị:</div>
            <div className='tendangnhap'>Tên đăng nhập:</div>
            <div className='matkhau'>Mật khẩu:</div>
          </div>
        </div>
        <div className='dichvusudung'>Dịch vụ sử dụng:</div>
      </div>
      <div
        className='add-device-btn'
        onClick={() => navigate('/dashboard/device/detail')}
      >
        <span>
          <AddIc />
        </span>
        <span>Cập nhật thiết bị</span>
      </div>
    </div>
  );
};

export default DetailDevice;
