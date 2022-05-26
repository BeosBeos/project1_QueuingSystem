import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../../Button/Button';
import Textbox from '../../../Textbox/Textbox';
import './newdevice.scss';

const NewDevice = () => {
  const navigate = useNavigate();
  return (
    <div className='new-device'>
      <div className='title'>Quản lý thiết bị</div>
      <div className='container'>
        <div className='container__info-divice'>Thông tin thiết bị</div>
        <div className='col'>
          <div className='col__left'>
            <Textbox label='Mã thiết bị *' />
            <Textbox label='Tên thiết bị *' />
            <Textbox label='Địa chỉ IP *' />
          </div>
          <div className='col__right'>
            <Textbox label='Loại thiết bị *' />
            <Textbox label='Tên đăng nhập *' />
            <Textbox label='Mật khẩu *' />
          </div>
        </div>
        <div className='use-service'>
          <Textbox label='Dịch vụ sử dụng *' />
        </div>
        <div className='note'>* Là trường thông tin bắt buộc</div>
      </div>

      <div className='btn__bottom'>
        <div className='cancel'>
          <Button
            text='Hủy bỏ'
            isOutlined
            onClick={() => navigate('/dashboard/device/list')}
          />
        </div>
        <div className='add__device'>
          <Button
            text='Thêm thiết bị'
            onClick={() => navigate('/dashboard/device/list')}
          />
        </div>
      </div>
    </div>
  );
};

export default NewDevice;
