import React from 'react';
import { useNavigate } from 'react-router';
import Select from '../../../Select/Select';
import Table, { IDeviceRow, IServiceRow, Service } from '../../../Table/Table';
import './listservice.scss';
import { ReactComponent as AddIc } from '../../../../Assets/add-square.svg';

const activeStatus = ['Tất cả', 'Hoạt động', 'Ngưng hoạt động'];
const connectionStatus = ['Tất cả', 'Kết nối', 'Mất kết nối'];
const tableData: IServiceRow[] = [
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',
    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: true,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'KIO_02',
    serviceName: 'Kiosk2',
    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: true,
    displayDetail: false,
    displayUpdate: false,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',
    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: true,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: true,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: true,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: false,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: true,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: false,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: true,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'KIO_01',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: true,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: true,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'KIO_02',
    serviceName: 'Kiosk2',
    isActivated: true,
    serviceDetail: 'Chi tiết dịch vụ',
    displayDetail: false,
    displayUpdate: false,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: true,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: true,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: true,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: false,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: false,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: true,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: false,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'K2',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: true,
    displayDetail: true,
    displayUpdate: true,
  },
  {
    serviceId: 'ABC',
    serviceName: 'Kiosk',

    serviceDetail: 'Chi tiết dịch vụ',
    isActivated: true,
    displayDetail: true,
    displayUpdate: true,
  },
];
const ListService = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="service-list">
        <div className="row label">Danh sách dịch vụ</div>
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
        className="add-service-btn"
        onClick={() => navigate('/dashboard/device/new')}
      >
        <span>
          <AddIc />
        </span>
        <span>Thêm dịch vụ</span>
      </div>
    </>
  );
};

export default ListService;
