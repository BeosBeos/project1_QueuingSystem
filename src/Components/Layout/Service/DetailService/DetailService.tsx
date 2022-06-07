import React from 'react';
import { useNavigate } from 'react-router';
import Select from '../../../Select/Select';
import Table from '../../../Table/Table';
import Textbox, { InputType } from '../../../Textbox/Textbox';
import './detailservice.scss';
import { ReactComponent as UpdateIc } from '../../../../Assets/update.svg';
import { ReactComponent as ReturnIc } from '../../../../Assets/return.svg';
import { queueList } from '../../../Mock';

const DetailService: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="app__layout-service__detail-service">
      <div className="app__layout-service__title">Quản lý dịch vụ</div>
      <div className="app__layout-service__detail-service__container">
        <div className="service-detail">
          <div className="row form-label">Thông tin dịch vụ</div>
          <div className="row">
            <div className="flex-1">Mã dịch vụ:</div>
            <div>201</div>
          </div>
          <div className="row">
            <div className="flex-1">Tên dịch vụ:</div>
            <div>Khám tim mạch</div>
          </div>
          <div className="row">
            <div className="flex-1">Mô tả:</div>
            <div className="flex-2">Chuyên các bệnh lý về tim</div>
          </div>
          <div className="row form-label">Quy tắc cấp số</div>
          <div className="row">
            <div>Tăng tự động:</div>
            <div></div>
          </div>
          <div className="row">
            <div>Prefix:</div>
            <div></div>
          </div>
          <div className="row">
            <div>Reset mỗi ngày</div>
          </div>
        </div>
        <div className="service-queue">
          <div className="row filters">
            <Select
              label="Trạng thái"
              options={['Tất cả', 'Đã hoàn thành', 'Đã thực hiện', 'Vắng']}
            />
            <Textbox label="Từ khoá" type={InputType.search} />
          </div>
          <div className="row table">
            <Table data={queueList} displayRow={8} />
          </div>
        </div>
      </div>
      <div
        className="app__layout-service__add-service-btn"
      >
        <div className="btn-update" onClick={() => navigate('/dashboard/service/modify')}>
          <span>
            <UpdateIc />
          </span>
          <span>Cập nhật danh sách</span>
        </div>

        <div className="btn-return" onClick={() => navigate('/dashboard/service/list')}>
          <span>
            <ReturnIc />
          </span>
          <span>Quay lại</span>
        </div>
      </div>
    </div>
  );
};

export default DetailService;
