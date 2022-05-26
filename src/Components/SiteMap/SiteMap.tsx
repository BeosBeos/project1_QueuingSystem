import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './sitemap.scss';
import { ReactComponent as ArrowIc } from '../../Assets/arrow.svg';
enum ServicePath {
  service = 'Dịch vụ',
  list = 'Danh sách dịch vụ',
  new = 'Thêm dịch vụ',
  modify = 'Cập nhật',
  detail = 'Chi tiết',
}

enum DevicePath {
  device = 'Thiết bị',
  list = 'Danh sách thiết bị',
  new = 'Thêm thiết bị',
  modify = 'Cập nhật thiết bị',
  detail = 'Chi tiết thiết bị',
}

const SiteMap: React.FC = () => {
  const location = useLocation();
  const [path, setPath] = useState<string[]>([]);
  useEffect(() => {
    const arr = location.pathname.split('/');
    setPath(arr);
  }, [location]);
  return (
    <div className="sitemap">
      {path.map((pathname: string, index) => {
        if (index > 1) {
          return (
            <div className="path">
              <div className="path__arrow">
                <ArrowIc />
              </div>
              <div className="path__name">
                {path[2] === 'service' &&
                  ServicePath[pathname as keyof typeof ServicePath]}
                {path[2] === 'device' &&
                  DevicePath[pathname as keyof typeof DevicePath]}
                {path[2] === 'panel' && 'Dashboard'}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SiteMap;
