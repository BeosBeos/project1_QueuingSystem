/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Pagination from '../Pagination/Pagination';
import './table.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import internal from 'stream';

export enum DeviceActiveStatus {
  Active = 'Hoạt động',
  Inactive = 'Ngưng hoạt động',
}
export enum DeviceConnectionStatus {
  Connecting = 'Kết nối',
  Disconnected = 'Mất kết nối',
}
export enum QueueStatus {
  pending = "Đang chờ",
  used = "Đã sử dụng",
  aborted = "Bỏ qua",
}
export enum Service {
  Heart = 'Khám tim mạch',
  Obstetric = 'Khám sản phụ khoa',
  Dental = 'Khám răng',
  General = 'Khám tổng quát',
  Eye = 'Khám mắt',
  Space = ', ',
}

export enum ColumnLabels {
  deviceId = 'Mã thiết bị',
  deviceName = 'Tên thiết bị',
  ipAddress = 'Địa chỉ IP',
  isActivated = 'Trạng thái hoạt động',
  isConnected = 'Trạng thái kết nối',
  services = 'Dịch vụ sử dụng',
  serviceId = 'Mã dịch vụ',
  serviceName = 'Tên dịch vụ',
  serviceDescribe = 'Mô tả',
  no = 'STT',
  customerName = 'Tên khách hàng',
  grantTime = 'Thời gian cấp',
  expireTime = 'Hạn sử dụng',
  queueStatus = 'Trạng thái',
  provideBy = 'Nguồn cấp',

  userName = 'Tên đăng nhập',
  fullName = 'Họ tên',
  phoneNumber = 'Số điện thoại',
  email = 'Email',
  role = 'Vai trò',

  roleName = 'Tên vai trò',
  userNumber = 'Số người dùng',

  impactTime = 'Thời gian tác động',
  ip = 'IP Thực hiện',
  act = 'Thao tác thực hiện'
}

export enum DisplayedColumns {
  deviceId = 'deviceId',
  deviceName = 'deviceName',
  ipAddress = 'ipAddress',
  isActivated = 'isActivated',
  isConnected = 'isConnected',
  services = 'services',
  displayDetail = 'displayDetail',
  displayUpdate = 'displayUpdate',
  serviceId = 'serviceId',
  serviceName = 'serviceName',
  serviceDescribe = 'serviceDescribe',
  serviceUpdate = 'serviceUpdate',
  serviceDetail = 'serviceDetail',
  no = 'no',
  customerName = 'customerName',
  grantTime = 'grantTime',
  expireTime = 'expireTime',
  queueStatus = 'queueStatus',
  provideBy = 'provideBy',
  queueDetail = 'queueDetail',

  userName = 'userName',
  fullName = 'fullName',
  phoneNumber = 'phoneNumber',
  email = 'email',
  role = 'role',

  userUpdate = 'userUpdate',

  roleName = 'roleName',
  userNumber = 'userNumber',
  roleUpdate = 'roleUpdate',

  impactTime = 'impactTime',
  ip = 'ip',
  act = 'act',

}

// export enum ServiceColumns {
//   serviceId,
//   serviceName,
//   serviceDetail,
//   isActivated,
//   displayDetail,
//   displayUpdate,
// }

export interface IDeviceRow {
  deviceId: string;
  deviceName: string;
  ipAddress: string;
  isActivated: boolean;
  isConnected: boolean;
  services: Service[];
  displayDetail: boolean;
  displayUpdate: boolean;
}

export interface IServiceRow {
  serviceId: string;
  serviceName: string;
  serviceDescribe: string;
  isActivated: boolean;
  serviceDetail: boolean;
  serviceUpdate: boolean;
}

export interface IQueueRow {
  no: number;
  customerName: string;
  serviceName: Service[];
  grantTime: string;
  expireTime: string;
  queueStatus: QueueStatus;
  provideBy: string;
  queueDetail: boolean;
}

export interface IServiceQueue {
  no: number;
  queueStatus: QueueStatus;
}

export interface IReportRow{
  no: number;
  serviceName: Service[];
  grantTime: string;
  queueStatus: QueueStatus;
  provideBy: string;
}

export interface IUserRow{
  userName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  role: string;
  isActivated: boolean;
  userUpdate: boolean;
}

export interface IRoleRow{
  roleName: string;
  userNumber: number;
  serviceDescribe: string;
  roleUpdate: boolean;
}

export interface IAccountLogRow{
  userName: string;
  impactTime: string;
  ip: string;
  act: string;
}

type T = keyof typeof ColumnLabels;

const Table: React.FC<{ data: Array<any>; displayRow?: number }> = ({
  data,
  displayRow,
}) => {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [paginationData, setPaginationData] = useState(
    data.slice(0, displayRow ? displayRow : 9)
  );

  useEffect(() => {
    const newData = data.slice(
      displayRow ? displayRow * paginationIndex : 9 * paginationIndex,
      displayRow
        ? displayRow * (paginationIndex + 1)
        : 9 * (paginationIndex + 1)
    );
    setPaginationData(newData);

    return () => {
      setPaginationData([]);
    };
  }, [paginationIndex, data, displayRow]);

  const changeIndex = (index: number) => {
    setPaginationIndex(index);
  };

  return (
    <div className='app__table'>
      <table>
        <thead>
          <tr>
            {Object.keys(paginationData[0]).map((column: string) => {
              return <th>{ColumnLabels[column as T]}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {paginationData.map((row) => {
            return (
              <tr>
                {Object.entries(row).map((entry: any) => {
                  if (entry[0] === DisplayedColumns.isActivated) {
                    return (
                      <td>
                        <div className='row'>
                          <div
                            className={`status-dot ${entry[1] ? `active` : `inactive`
                              }`}
                          ></div>
                          <span>
                            {entry[1] ? 'Đang hoạt động' : 'Ngưng hoạt động'}
                          </span>
                        </div>
                      </td>
                    );
                  }
                  if (entry[0] === DisplayedColumns.isConnected) {
                    return (
                      <td>
                        <div className='row'>
                          <div
                            className={`status-dot ${entry[1] ? `active` : `inactive`
                              }`}
                          ></div>
                          <span>{entry[1] ? 'Kết nối' : 'Mất kết nối'}</span>
                        </div>
                      </td>
                    );
                  }
                  if (entry[0] === DisplayedColumns.serviceDetail) {
                    return (
                      <td>
                        <Link to={'/dashboard/service/detail'}>Chi tiết</Link>
                      </td>
                    );
                  }
                  if (entry[0] === DisplayedColumns.serviceUpdate) {
                    return (
                      <td>
                        <Link to={'/dashboard/service/modify'}>Cập nhật</Link>
                      </td>
                    );
                  }
                  if (entry[0] === DisplayedColumns.displayDetail) {
                    return (
                      <td>
                        <Link to={'/dashboard/device/detail'}>Chi tiết</Link>
                      </td>
                    );
                  }
                  if (entry[0] === DisplayedColumns.displayUpdate) {
                    return (
                      <td>
                        <Link to={'/dashboard/device/modify'}>Cập nhật</Link>
                      </td>
                    );
                  }
                  if (entry[0] === DisplayedColumns.userUpdate) {
                    return (
                      <td>
                        <Link to={'/dashboard/system/modify_account'}>Cập nhật</Link>
                      </td>
                    );
                  }
                  if (entry[0] === DisplayedColumns.roleUpdate) {
                    return (
                      <td>
                        <Link to={'/dashboard/system/modify_role'}>Cập nhật</Link>
                      </td>
                    );
                  }
                  
                  if (entry[0] === DisplayedColumns.queueStatus) {
                    return (
                      <td>
                        <div className='row'>
                          <div
                            className={`status-dot ${entry[1] === QueueStatus.pending && `pending`
                              } ${entry[1] === QueueStatus.used && `used`
                              } ${entry[1] === QueueStatus.aborted && `inactive`
                              }`}
                          ></div>
                          <span>
                            {entry[1] === QueueStatus.pending && 'Đang chờ'}
                            {entry[1] === QueueStatus.used && 'Đã sử dụng '}
                            {entry[1] === QueueStatus.aborted && 'Bỏ qua'}
                          </span>
                        </div>
                      </td>
                    );
                  }
                  if (entry[0] === DisplayedColumns.queueDetail) {
                    return (
                      <td>
                        <Link to={'/dashboard/queue/detail'}>Chi tiết</Link>
                      </td>
                    );
                  }

                  return <td>{entry[1]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='pagination'>
        <Pagination
          data={data}
          displayRow={displayRow ? displayRow : 9}
          onChange={changeIndex}
        />
      </div>
    </div>
  );
};

export default Table;
