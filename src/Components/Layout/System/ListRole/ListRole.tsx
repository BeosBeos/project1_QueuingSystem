import React from 'react';
import Select from '../../../Select/Select';
import Table from '../../../Table/Table';
import { ReactComponent as AddIc } from '../../../../Assets/add-square.svg';
import './listrole.scss';
import { useNavigate } from 'react-router';
import Textbox, { InputType } from '../../../Textbox/Textbox';
import { activeStatus, connectionStatus, deviceList, roleList } from '../../../Mock';

const ListRule: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="app__layout-service__list-role">
      <div className="app__layout-service__list-role__container">
        <div className="row app__layout-service__list-role__container__label">
          Danh sách vai trò
        </div>
        <div className="row app__layout-service__list-role__container__filters">
          <Textbox label="Từ khoá" type={InputType.search} boxWidth={300} />
        </div>
        <div className="row app__layout-service__list-role__container__table">
          <Table data={roleList} displayRow={9} />
        </div>
      </div>
      <div
        className="app__layout-service__list-role__float-btn"
        onClick={() => navigate('/dashboard/system/new_role')}
      >
        <span>
          <AddIc />
        </span>
        <span>Thêm vai trò</span>
      </div>
    </div>
  );
};

export default ListRule;
