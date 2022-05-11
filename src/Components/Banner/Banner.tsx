import React from 'react'
import Banner1 from '../../Assets/Banner1';
import { Banner2 } from '../../Assets/Banner2';
import "./banner.scss"

const Banner = () => {
  const path = window.location.pathname

  return (
    <div className="images">
    {path === "/login" ?  <Banner1/> : <Banner2 />}
    {path === "/login" && <div className="heading">
        <div className="heading-small">Hệ thống</div>
        <div className="heading-large">Quản lý xếp hàng</div>
    </div>}
    
    
    
</div>
  )
}

export default Banner