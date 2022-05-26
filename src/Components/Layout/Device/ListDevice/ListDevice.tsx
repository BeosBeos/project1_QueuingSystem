import React from 'react';
import Select from '../../../Select/Select';
import Table, { IDeviceRow, Service } from '../../../Table/Table';
import { ReactComponent as AddIc } from '../../../../Assets/add-square.svg';
import './listdevice.scss';
import { useNavigate } from 'react-router';

const activeStatus = ['Tất cả', 'Hoạt động', 'Ngưng hoạt động'];
const connectionStatus = ['Tất cả', 'Kết nối', 'Mất kết nối'];

const tableData: IDeviceRow[] = [
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_02',
    deviceName: 'Kiosk2',
    ipAddress: '192.169.1.2',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: false,
    displayUpdate: false,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_01',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'KIO_02',
    deviceName: 'Kiosk2',
    ipAddress: '192.169.1.2',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: false,
    displayUpdate: false,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'K2',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: 'ABC',
    deviceName: 'Kiosk',
    ipAddress: '192.169.1.1',
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
];

const ListDevice = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="device-list">
        <div className="row label">Danh sách thiết bị</div>
        <div className="row filters">
          <Select
            label="Trạng thái hoạt động"
            options={activeStatus}
            width={300}
          />
          <Select
            label="Trạng thái kết nối"
            options={connectionStatus}
            width={300}
          />
          {/* <Textbox label="Từ khoá" /> */}
        </div>
        <div className="row table">
          <Table data={tableData} displayRow={9} />
        </div>
      </div>
      <div
        className="add-device-btn"
        onClick={() => navigate('/dashboard/device/new')}
      >
        <span>
          <AddIc />
        </span>
        <span>Thêm thiết bị</span>
      </div>
    </>
  );
};

export default ListDevice;
