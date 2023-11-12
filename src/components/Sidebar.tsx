import React from 'react'
import {BsGrid1X2Fill, BsListCheck, BsChatFill, BsGlobeAsiaAustralia, BsGeoAltFill, BsAirplaneEnginesFill} from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <div  className='icon_header'> ARGOS </div>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsAirplaneEnginesFill className='icon'/> איתורי זמן אמת
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGeoAltFill className='icon'/> קווי מתאר - טירת האגם
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> תצוגת תהליך
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGlobeAsiaAustralia className='icon'/> תצוגת מפה
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsChatFill className='icon'/> התייעצות עם בוט
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar