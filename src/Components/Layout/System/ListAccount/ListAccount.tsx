import React from 'react';
import Select from '../../../Select/Select';
import Table from '../../../Table/Table';
import { ReactComponent as AddIc } from '../../../../Assets/add-square.svg';
import './listaccount.scss';
import { useNavigate } from 'react-router';
import Textbox, { InputType } from '../../../Textbox/Textbox';
import { activeStatus, connectionStatus, userList } from '../../../Mock';

const ListAccount: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="app__account-layout__account-list">
      <div className="app__account-layout__account-list__container">
        <div className="row app__account-layout__account-list__container__label">
          Danh sách thiết bị
        </div>
        <div className="row app__account-layout__account-list__container__filters">
          <Select
            label="Tên vai trò"
            options={activeStatus}
            width={400}
          />
          <Textbox label="Từ khoá" type={InputType.search} boxWidth={400} />
        </div>
        <div className="row app__account-layout__account-list__container__table">
          <Table data={userList} displayRow={9} />
        </div>
      </div>
      <div
        className="app__account-layout__account-list__float-btn"
        onClick={() => navigate('/dashboard/system/new_account')}
      >
        <span>
          <AddIc />
        </span>
        <span>Thêm tài khoản</span>
      </div>
    </div>
  );
};

export default ListAccount;
