import React from 'react'
import "./device.scss"

const Device = () => {
  return (
    <div className='app__layout-device'>
      <div className='bigcol2'>
        <div className='app__layout-device__title1'>
          <div className='app__layout-device__title1-list'>Thiết bị</div>
          
          <div className='app__layout-device__title1-device'>Danh sách thiết bị</div>
        </div>
        <div className='app__layout-device__title2'>Danh sách thiết bị</div>
        <form action="form">
          <select className="status__form1" name="languages" id="lang">
            <option value="tatca">Tất cả</option>
            <option value="hoatdong">Hoạt động</option>
            <option value="ngunghoatdong">Ngưng hoạt động</option>
          </select>
        </form>
        
        {/* <div className='col'>
          <div className='col-manage'>
            <Textbox label="" value={Device.idManage} />
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Device