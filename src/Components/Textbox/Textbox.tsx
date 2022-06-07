import React from 'react';
import { ReactComponent as EyeIc } from '../../Assets/eye.svg';
import { ReactComponent as SearchIc } from '../../Assets/search.svg';
import './textbox.scss';

export enum InputType {
  password,
  search,
  text,
  field,
  fullName,
  userName,
  phoneNumber,
  email,

  deviceId,
  deviceName,
  ipAddress,
  services,

  serviceId,
  serviceName,
}

const Textbox: React.FC<{
  label?: string;
  type?: InputType;
  value?: string;
  onChange?: Function;
  boxWidth?: number,
  flexItem?: boolean,

  fullName?: string,
  userName?: string,
  phoneNumber?: string,
  email?: string,

  deviceId?: string,
  deviceName?: string,
  ipAddress?: string,
  services?: string,

  serviceId?: string,
  serviceName?: string,
}> = ({ label, type, value, onChange, boxWidth, flexItem, fullName, userName, phoneNumber, email,deviceId, deviceName, ipAddress, services, serviceId, serviceName }) => {
  return (
    <div className={`app__text-box ${flexItem && `flex-1`}`}  style={{maxWidth: boxWidth}}>
      <div className="app__text-box__label">{label}</div>
      <div className="app__text-box__input">
        {(type === InputType.text || type === undefined) && <input   placeholder="" value={value} onChange={(e) => onChange && onChange(e.target.value)} autoComplete="new-password" />}
        {(type === InputType.password) && <input  type={"password"} placeholder="" value={value} onChange={(e) => onChange && onChange(e.target.value)} autoComplete="new-password" />}
        {(type === InputType.search) && <input   placeholder="Nhập từ khoá" value={value} onChange={(e) => onChange && onChange(e.target.value)} autoComplete="new-password" />}
        {(type === InputType.field) && <textarea placeholder='Mô tả dịch vụ' value={value} onChange={(e) => onChange && onChange(e.target.value)}/>}
        {type === InputType.password && <div className="input-icon">
          <EyeIc />
        </div>}
        {type === InputType.search && <div className="input-icon">
          <SearchIc />
        </div>}
        {(type === InputType.fullName) && <input   placeholder="Nhập họ tên" value={value} onChange={(e) => onChange && onChange(e.target.value)} autoComplete="new-password" />}
        {(type === InputType.userName) && <input   placeholder="Nhập tên đăng nhập" value={value} onChange={(e) => onChange && onChange(e.target.value)} autoComplete="new-password" />}
        {(type === InputType.phoneNumber) && <input   placeholder="Nhập số điện thoại" value={value} onChange={(e) => onChange && onChange(e.target.value)} autoComplete="new-password" />}
        {(type === InputType.email) && <input   placeholder="Nhập email" value={value} onChange={(e) => onChange && onChange(e.target.value)} autoComplete="new-password" />}
      
        {(type === InputType.deviceId) && <input   placeholder="Nhập mã thiết bị" value={value} onChange={(e) => onChange && onChange(e.target.value)} autoComplete="new-password" />}
        {(type === InputType.deviceName) && <input   placeholder="Nhập tên thiết bị" value={value} onChange={(e) => onChange && onChange(e.target.value)} autoComplete="new-password" />}
        {(type === InputType.ipAddress) && <input   placeholder="Nhập địa chỉ IP" value={value} onChange={(e) => onChange && onChange(e.target.value)} autoComplete="new-password" />}
        {(type === InputType.services) && <input   placeholder="Nhập dịch vụ sử dụng" value={value} onChange={(e) => onChange && onChange(e.target.value)} autoComplete="new-password" />}

        {(type === InputType.serviceId) && <input   placeholder="201" value={value} onChange={(e) => onChange && onChange(e.target.value)} autoComplete="new-password" />}
        {(type === InputType.serviceName) && <input   placeholder="Khám tim mạch" value={value} onChange={(e) => onChange && onChange(e.target.value)} autoComplete="new-password" />}

      </div>
    </div>
  );
};

export default Textbox;
