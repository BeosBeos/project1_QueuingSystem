import React, { useState } from 'react';
import { ReactComponent as DownloadIc } from '../../../../Assets/download.svg';
import './createreport.scss';
import { useNavigate } from 'react-router';
import Table from '../../../Table/Table';
import DatePicker from '../../../DatePicker/DatePicker';
import { reportList } from '../../../Mock';

const CreateReport: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div className="app__layout-report__new-report">
      <div className="app__layout-report__new-report__container">
        <div className="row app__layout-report__new-report__container__label">
          <DatePicker label="Chọn thời gian" />
        </div>
        <div className="row app__layout-report__new-report__container__table">
          <Table data={reportList} />
        </div>
      </div>

      <div
        className="app__layout-report__new-report__float-btn"
        onClick={() => {}}
      >
        <span>
          <DownloadIc />
        </span>
        <span>Tải về</span>
      </div>
    </div>
  );
};

export default CreateReport;
