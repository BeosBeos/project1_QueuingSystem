import React from 'react'
import { Outlet } from 'react-router'
import SiteMap from '../../Components/Layout/Sitemap/SiteMap'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Textbox from '../../Components/Textbox/Textbox'
import UserSection from '../../Components/UserSection/UserSection'
import "./dashboardpage.scss"

const DashboardPage: React.FC = () => {
  return (
    <div className="app__dashboard-page">
      <Sidebar/>
      <UserSection/>
      
      <div className="dashboard__content">
        <div className="dashboard__content__container">
        <SiteMap/>
        <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage