import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../../Button/Button';
import Select from '../../../Select/Select';
import Textbox from '../../../Textbox/Textbox';
import './modifydevice.scss';

const typeofDevice = ['Kiosk', 'Display counter'];
const ModifyDevice = () => {
  const navigate = useNavigate();
  return (
    <div className='modify-device'>
      <div className='modify-device__tittle'>Quản lý thiết bị</div>
      <div className='modify-device__container'>
        <div className='container-label'>Thông tin thiết bị</div>
        <div className='col'>
          <div className='col__left'>
            <Textbox label='Mã thiết bị *' />
            <Textbox label='Tên thiết bị *' />
            <Textbox label='Địa chỉ IP *' />
          </div>
          <div className='col__right'>
            <Select label='Loại thiết bị' options={typeofDevice} width={510} />
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
            onClick={() => navigate('/dashboard/device/modify')}
          />
        </div>
        <div className='update__device'>
          <Button
            text='Cập nhật thiết bị'
            onClick={() => navigate('/dashboard/device/modify')}
          />
        </div>
      </div>
    </div>
  );
};

export default ModifyDevice;
