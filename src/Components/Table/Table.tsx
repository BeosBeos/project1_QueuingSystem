import React from 'react';
import Pagination from '../Pagination/Pagination';
import './table.scss';
import { useState } from 'react';
import { useEffect } from 'react';
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
}

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

type T = keyof typeof ColumnLabels;

const Table: React.FC<{ data: IDeviceRow[]; displayRow?: number }> = ({
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
  }, [paginationIndex]);

  const changeIndex = (index: number) => {
    setPaginationIndex(index);
  };

  return (
    <div className="app__table">
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
                {Object.values(row).map((value, index) => {
                  if (index === DisplayedColumns.displayDetail) {
                    return (
                      <td>
                        <a href="#">{value === true && `Chi tiết`}</a>
                      </td>
                    );
                  }
                  if (index === DisplayedColumns.displayUpdate) {
                    return (
                      <td>
                        <a href="#">{value === true && `Cập nhật`}</a>
                      </td>
                    );
                  }
                  if (index === DisplayedColumns.isActivated) {
                    return (
                      <td>
                        <div className="row">
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
                        <div className="row">
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
      <div className="pagination">
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
