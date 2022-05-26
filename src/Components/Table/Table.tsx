/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Pagination from '../Pagination/Pagination';
import './table.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export enum DeviceActiveStatus {
  Active = 'Hoạt động',
  Inactive = 'Ngưng hoạt động',
}
export enum DeviceConnectionStatus {
  Connecting = 'Kết nối',
  Disconnected = 'Mất kết nối',
}
export enum Service {
  Heart = 'Tim mạch',
  Obstetric = 'Sản phụ khoa',
  Dental = 'Nha sĩ',
  General = 'Khám tổng quát',
}

export enum ColumnLabels {
  deviceId = 'Mã thiết bị',
  deviceName = 'Tên thiết bị',
  ipAddress = 'Địa chỉ IP',
  isActivated = 'Trạng thái hoạt động',
  isConnected = 'Trạng thái kết nối',
  services = 'Dịch vụ sử dụng',
  displayDetail = 'Chi tiết',
  displayUpdate = 'Cập nhật',
  serviceId = 'Mã dịch vụ',
  serviceName = 'Tên dịch vụ',
  serviceDetail = 'Chi tiết dịch vụ',
}

export enum DisplayedColumns {
  deviceId,
  deviceName,
  ipAddress,
  isActivated,
  isConnected,
  services,
  displayDetail,
  displayUpdate,
  serviceId,
  serviceName,
  serviceDetail,
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
  serviceDetail: string;
  isActivated: boolean;
  displayDetail: boolean;
  displayUpdate: boolean;
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
      // setPaginationIndex(0);
    };
  }, [paginationIndex, data, displayRow]);

  const changeIndex = (index: number) => {
    setPaginationIndex(index);
  };

  return (
    <div className='app__table'>
      <table>
        {/* {Object.keys(data[0]).toString().includes('serviceId').toString()} */}
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
                {Object.values(row).map((value: any, index: number) => {
                  if (index === DisplayedColumns.displayDetail) {
                    return (
                      <td>
                        {value === true && (
                          <Link to={'/dashboard/device/modify'}>Chi tiết</Link>
                        )}
                      </td>
                    );
                  }
                  if (index === DisplayedColumns.displayUpdate) {
                    return (
                      <td>
                        {value === true && (
                          <Link to={'/dashboard/device/modify'}>Cập nhật</Link>
                        )}
                      </td>
                    );
                  }
                  if (index === DisplayedColumns.isActivated) {
                    return (
                      <td>
                        <div className='row'>
                          <div
                            className={`status-dot ${
                              value ? `active` : `inactive`
                            }`}
                          ></div>
                          <span>
                            {value ? 'Đang hoạt động' : 'Ngưng hoạt động'}
                          </span>
                        </div>
                      </td>
                    );
                  }
                  if (index === DisplayedColumns.isConnected) {
                    return (
                      <td>
                        <div className='row'>
                          <div
                            className={`status-dot ${
                              value ? `active` : `inactive`
                            }`}
                          ></div>
                          <span>{value ? 'Kết nối' : 'Mất kết nối'}</span>
                        </div>
                      </td>
                    );
                  } else {
                    return (
                      <td>
                        <span className={`status-dot`}></span>
                        <span>{value}</span>
                      </td>
                    );
                  }
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
